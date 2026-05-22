import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CharacterStage } from "./components/CharacterStage";
import { ChoiceList } from "./components/ChoiceList";
import { DialogueBox } from "./components/DialogueBox";
import { Gallery } from "./components/Gallery";
import { getCharacter } from "./data/characters";
import { galleryBackgrounds } from "./data/gallery";
import { initialAffection, scenes } from "./data/scenes";
import type { Affection, Choice, GameHistoryEntry, Scene } from "./types/game";
import {
  addDays,
  INITIAL_GAME_DATE,
  type GameDate,
} from "./utils/gameDate";
import { preloadBackground } from "./utils/backgroundAssets";
import { SCENE_FADE_MS } from "./utils/sceneTransition";

const CHOICE_CHARACTER_FADE_MS = 480;
const ENDING_WHITE_FADE_MS = 1400;
const GUIDE_TRANSITION_MS = 900;
const GALLERY_UNLOCKED_STORAGE_KEY = "arktis-gallery-unlocked";
const GALLERY_IMAGES_STORAGE_KEY = "arktis-gallery-images";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });

const readStoredGalleryUnlocked = () =>
  window.localStorage.getItem(GALLERY_UNLOCKED_STORAGE_KEY) === "true";

const readStoredGalleryImages = () => {
  try {
    return JSON.parse(
      window.localStorage.getItem(GALLERY_IMAGES_STORAGE_KEY) ?? "{}",
    ) as Record<string, boolean>;
  } catch {
    return {};
  }
};

function App() {
  const [sceneId, setSceneId] = useState("intro");
  const [affection, setAffection] = useState<Affection>(initialAffection);
  const [started, setStarted] = useState(false);
  const [dialogueVisible, setDialogueVisible] = useState(true);
  const [delayedScenes, setDelayedScenes] = useState<Record<string, boolean>>(
    {},
  );
  const [awardedScenes, setAwardedScenes] = useState<Record<string, boolean>>(
    {},
  );
  const [seenScenes, setSeenScenes] = useState<Record<string, boolean>>({});
  const [gameDate, setGameDate] = useState<GameDate>(INITIAL_GAME_DATE);
  const [history, setHistory] = useState<GameHistoryEntry[]>([]);
  const [stageOpacity, setStageOpacity] = useState(1);
  const [sceneContentOpacity, setSceneContentOpacity] = useState(1);
  const [sceneContentTransitionMs, setSceneContentTransitionMs] =
    useState(SCENE_FADE_MS);
  const [isCharacterExitingForChoices, setIsCharacterExitingForChoices] =
    useState(false);
  const [sceneUiFadeInId, setSceneUiFadeInId] = useState<string>();
  const [isSceneTransitioning, setIsSceneTransitioning] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isGuideExiting, setIsGuideExiting] = useState(false);
  const [isEndingImageFading, setIsEndingImageFading] = useState(false);
  const [galleryUnlocked, setGalleryUnlocked] = useState(
    readStoredGalleryUnlocked,
  );
  const [collectedGalleryImages, setCollectedGalleryImages] = useState(
    readStoredGalleryImages,
  );
  const startTimeoutRef = useRef<number | undefined>(undefined);
  const choiceCharacterExitTimeoutRef = useRef<number | undefined>(undefined);
  const endingImageFadeTimeoutRef = useRef<number | undefined>(undefined);
  const guideTransitionTimeoutRef = useRef<number | undefined>(undefined);
  const isTransitioningRef = useRef(false);
  const titleBackgroundUrl = new URL(
    "./assets/backgrounds/title.jpg",
    import.meta.url,
  ).href;
  const guideImageUrl = new URL("./assets/guide/guide.png", import.meta.url)
    .href;
  const startButtonUrl = new URL("./assets/button/start_btn.png", import.meta.url)
    .href;
  const galleryButtonUrl = new URL(
    "./assets/button/gallery_btn.png",
    import.meta.url,
  ).href;
  const endingCreditsWideUrl = new URL(
    "./assets/backgrounds/credits/ending_credits_wide.jpg",
    import.meta.url,
  ).href;

  const scene = scenes[sceneId];
  const isEndingCreditsScene = sceneId === "ending-credits";

  const speakerName = useMemo(() => {
    if (scene.speakerLabel) {
      return scene.speakerLabel;
    }

    if (scene.speaker === "narrator") {
      return "나레이션";
    }

    return getCharacter(scene.speaker)?.name ?? scene.speaker;
  }, [scene.speaker, scene.speakerLabel]);

  const createHistorySnapshot = useCallback(
    (): GameHistoryEntry => ({
      sceneId,
      affection: { ...affection },
      gameDate: { ...gameDate },
      delayedScenes: { ...delayedScenes },
      awardedScenes: { ...awardedScenes },
      seenScenes: { ...seenScenes },
    }),
    [sceneId, affection, gameDate, delayedScenes, awardedScenes, seenScenes],
  );

  /** 배경(장소)이 바뀔 때만 페이드 전환 */
  const shouldAnimateSceneTransition = useCallback(
    (fromSceneId: string, toSceneId: string) => {
      const fromScene = scenes[fromSceneId];
      const toScene = scenes[toSceneId];

      if (!fromScene || !toScene) {
        return false;
      }

      if (fromScene.backgroundFade || toScene.backgroundFade) {
        return false;
      }

      return fromScene.background !== toScene.background;
    },
    [],
  );

  const runSceneFade = useCallback(
    (
      applyChange: () => void,
      skipFade: boolean,
      prepareChange: () => Promise<void> = () => Promise.resolve(),
    ) => {
      if (isTransitioningRef.current) {
        return;
      }

      isTransitioningRef.current = true;
      setIsSceneTransitioning(true);

      const finishTransition = () => {
        isTransitioningRef.current = false;
        setIsSceneTransitioning(false);
      };

      if (skipFade) {
        prepareChange().then(() => {
          applyChange();
          finishTransition();
        });
        return;
      }

      setSceneContentTransitionMs(SCENE_FADE_MS);
      setSceneContentOpacity(0);

      Promise.all([wait(SCENE_FADE_MS), prepareChange()]).then(() => {
        applyChange();

        requestAnimationFrame(() => {
          setSceneContentOpacity(1);
          window.setTimeout(() => {
            finishTransition();
          }, SCENE_FADE_MS);
        });
      });
    },
    [],
  );

  const applySceneExit = useCallback(() => {
    if (scene.advanceDayOnExit) {
      setGameDate((current) => addDays(current, 1));
    }
  }, [scene.advanceDayOnExit]);

  const transitionToScene = useCallback(
    (
      nextSceneId: string,
      options?: {
        recordHistory?: boolean;
        beforeSceneChange?: () => void;
      },
    ) => {
      if (nextSceneId === sceneId) {
        return;
      }

      const nextScene = scenes[nextSceneId];
      const skipFade = !shouldAnimateSceneTransition(sceneId, nextSceneId);
      const shouldPreloadNextBackground = Boolean(
        nextScene && scene.background !== nextScene.background,
      );

      runSceneFade(
        () => {
          if (options?.recordHistory !== false) {
            setHistory((current) => [...current, createHistorySnapshot()]);
          }

          options?.beforeSceneChange?.();
          applySceneExit();
          setSceneId(nextSceneId);
        },
        skipFade,
        () =>
          shouldPreloadNextBackground && nextScene
            ? preloadBackground(nextScene.background)
            : Promise.resolve(),
      );
    },
    [
      applySceneExit,
      createHistorySnapshot,
      runSceneFade,
      scene.background,
      sceneId,
      shouldAnimateSceneTransition,
    ],
  );

  const goToScene = (nextSceneId: string) => {
    const nextScene = scenes[nextSceneId];
    const shouldFadeCharacterBeforeChoices = Boolean(
      scene.character && nextScene?.choices && !isTransitioningRef.current,
    );

    if (shouldFadeCharacterBeforeChoices) {
      if (choiceCharacterExitTimeoutRef.current) {
        window.clearTimeout(choiceCharacterExitTimeoutRef.current);
      }

      setIsCharacterExitingForChoices(true);

      choiceCharacterExitTimeoutRef.current = window.setTimeout(() => {
        transitionToScene(nextSceneId, {
          beforeSceneChange: () => {
            setIsCharacterExitingForChoices(false);
          },
        });
      }, CHOICE_CHARACTER_FADE_MS);

      return;
    }

    transitionToScene(nextSceneId);
  };

  const resolveSceneNextScene = (currentScene: Scene) => {
    for (const condition of currentScene.conditionalNextSceneIds ?? []) {
      if (
        condition.requiredSeenSceneId &&
        !seenScenes[condition.requiredSeenSceneId]
      ) {
        continue;
      }

      if (condition.higherAffectionThan) {
        const { first, second } = condition.higherAffectionThan;
        if ((affection[first] ?? 0) < (affection[second] ?? 0)) {
          continue;
        }
      }

      if (condition.affectionGreaterThan) {
        const { character, value } = condition.affectionGreaterThan;
        if ((affection[character] ?? 0) <= value) {
          continue;
        }
      }

      return condition.nextSceneId;
    }

    return currentScene.nextSceneId;
  };

  const resolveChoiceNextScene = (choice: Choice) => {
    if (
      choice.nextSceneIdWhenAffectionEqual &&
      choice.affectionEqualBetween &&
      choice.affectionEqualBetween.length >= 2
    ) {
      const [first, second] = choice.affectionEqualBetween;
      if ((affection[first] ?? 0) === (affection[second] ?? 0)) {
        return choice.nextSceneIdWhenAffectionEqual;
      }
    }

    return choice.nextSceneId;
  };

  const selectChoice = (choice: Choice) => {
    transitionToScene(resolveChoiceNextScene(choice), {
      beforeSceneChange: () => {
        if (!choice.affection) {
          return;
        }

        setAffection((current) => {
          const next = { ...current };

          for (const [characterId, value] of Object.entries(
            choice.affection ?? {},
          )) {
            const id = characterId as keyof Affection;
            next[id] = (next[id] ?? 0) + value;
          }

          return next;
        });
      },
    });
  };

  const goBack = () => {
    if (
      history.length === 0 ||
      isTransitioningRef.current ||
      isCharacterExitingForChoices
    ) {
      return;
    }

    const previous = history[history.length - 1];
    const skipFade = !shouldAnimateSceneTransition(sceneId, previous.sceneId);

    runSceneFade(() => {
      setHistory((current) => current.slice(0, -1));
      setSceneId(previous.sceneId);
      setAffection({ ...previous.affection });
      setGameDate({ ...previous.gameDate });
      setDelayedScenes({ ...previous.delayedScenes });
      setAwardedScenes({ ...previous.awardedScenes });
      setSeenScenes({ ...previous.seenScenes });
    }, skipFade);
  };

  const restart = () => {
    setStarted(false);
    setSceneId("intro");
    setAffection(initialAffection);
    setDelayedScenes({});
    setAwardedScenes({});
    setSeenScenes({});
    setGameDate(INITIAL_GAME_DATE);
    setHistory([]);
    setIsCharacterExitingForChoices(false);
    setSceneUiFadeInId(undefined);
    setIsGuideOpen(false);
    setIsGuideExiting(false);
  };

  const startGame = () => {
    if (isStarting) {
      return;
    }

    setIsStarting(true);
    setSceneContentTransitionMs(400);
    setTitleOpacity(0);
    setSceneContentOpacity(0);

    startTimeoutRef.current = window.setTimeout(() => {
      setSceneId("intro");
      setAffection(initialAffection);
      setDelayedScenes({});
      setAwardedScenes({});
      setSeenScenes({});
      setGameDate(INITIAL_GAME_DATE);
      setHistory([]);
      setIsCharacterExitingForChoices(false);
      setSceneUiFadeInId(undefined);
      setIsStarting(false);
      setIsGuideOpen(true);
      setIsGuideExiting(false);
      setTitleOpacity(1);

      requestAnimationFrame(() => {
        setSceneContentTransitionMs(400);
        setSceneContentOpacity(1);
      });
    }, 400);
  };

  const startIntroFromGuide = () => {
    if (isGuideExiting) {
      return;
    }

    setIsGuideExiting(true);

    guideTransitionTimeoutRef.current = window.setTimeout(() => {
      setIsGuideOpen(false);
      setIsGuideExiting(false);
      setSceneId("intro-rain");
      setStarted(true);
      setSceneContentTransitionMs(GUIDE_TRANSITION_MS);
      setSceneContentOpacity(0);

      requestAnimationFrame(() => {
        setSceneContentOpacity(1);
      });
    }, GUIDE_TRANSITION_MS);
  };

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const continueFromEndingImage = (nextSceneId: string) => {
    if (isEndingImageFading) {
      return;
    }

    setIsEndingImageFading(true);

    endingImageFadeTimeoutRef.current = window.setTimeout(() => {
      goToScene(nextSceneId);
    }, ENDING_WHITE_FADE_MS);
  };

  useEffect(() => {
    if (!scene.backgroundFade) {
      setStageOpacity(1);
    }
  }, [sceneId, scene.backgroundFade]);

  useEffect(() => {
    return () => {
      if (startTimeoutRef.current) {
        window.clearTimeout(startTimeoutRef.current);
      }
      if (choiceCharacterExitTimeoutRef.current) {
        window.clearTimeout(choiceCharacterExitTimeoutRef.current);
      }
      if (endingImageFadeTimeoutRef.current) {
        window.clearTimeout(endingImageFadeTimeoutRef.current);
      }
      if (guideTransitionTimeoutRef.current) {
        window.clearTimeout(guideTransitionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setIsEndingImageFading(false);

    if (endingImageFadeTimeoutRef.current) {
      window.clearTimeout(endingImageFadeTimeoutRef.current);
      endingImageFadeTimeoutRef.current = undefined;
    }
  }, [sceneId]);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (sceneUiFadeInId !== sceneId) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSceneUiFadeInId(undefined);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [sceneId, sceneUiFadeInId, started]);

  useEffect(() => {
    if (!started) {
      return;
    }

    setSeenScenes((current) => {
      if (current[sceneId]) {
        return current;
      }

      return {
        ...current,
        [sceneId]: true,
      };
    });
  }, [sceneId, started]);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (isEndingCreditsScene && !galleryUnlocked) {
      setGalleryUnlocked(true);
      window.localStorage.setItem(GALLERY_UNLOCKED_STORAGE_KEY, "true");
    }
  }, [galleryUnlocked, isEndingCreditsScene, started]);

  useEffect(() => {
    if (!started || !galleryBackgrounds.has(scene.background)) {
      return;
    }

    setCollectedGalleryImages((current) => {
      if (current[scene.background]) {
        return current;
      }

      const next = {
        ...current,
        [scene.background]: true,
      };

      window.localStorage.setItem(
        GALLERY_IMAGES_STORAGE_KEY,
        JSON.stringify(next),
      );

      return next;
    });
  }, [scene.background, started]);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (!scene.autoAdvanceMs || !scene.nextSceneId) {
      return;
    }

    setDialogueVisible(false);
    setSceneContentTransitionMs(SCENE_FADE_MS);

    const nextSceneId = scene.nextSceneId;
    const shouldAdvanceDay = scene.advanceDayOnExit;

    if (!scene.backgroundFade) {
      const timer = window.setTimeout(() => {
        setSceneUiFadeInId(nextSceneId);
        transitionToScene(nextSceneId, { recordHistory: false });
        setDialogueVisible(true);
      }, scene.autoAdvanceMs);

      return () => window.clearTimeout(timer);
    }

    const fadeIn = scene.fadeInMs ?? 1200;
    const fadeOut = scene.fadeOutMs ?? 1200;
    const hold = scene.autoAdvanceMs;
    const timers: number[] = [];

    setStageOpacity(0);

    timers.push(
      window.setTimeout(() => {
        setStageOpacity(1);
      }, 80),
    );

    timers.push(
      window.setTimeout(
        () => {
          setStageOpacity(0);
        },
        80 + fadeIn + hold,
      ),
    );

    timers.push(
      window.setTimeout(
        () => {
          const nextScene = scenes[nextSceneId];

          void preloadBackground(nextScene.background).then(() => {
            setSceneContentTransitionMs(0);
            setSceneContentOpacity(0);

            if (shouldAdvanceDay) {
              setGameDate((current) => addDays(current, 1));
            }

            setSceneId(nextSceneId);
            setStageOpacity(1);
            setDialogueVisible(true);

            requestAnimationFrame(() => {
              setSceneContentTransitionMs(fadeIn);
              setSceneContentOpacity(1);
            });
          });
        },
        80 + fadeIn + hold + fadeOut,
      ),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [
    sceneId,
    scene.autoAdvanceMs,
    scene.nextSceneId,
    scene.advanceDayOnExit,
    scene.backgroundFade,
    scene.fadeInMs,
    scene.fadeOutMs,
    started,
    transitionToScene,
  ]);

  useEffect(() => {
    if (!started) {
      setDialogueVisible(true);
      return;
    }

    if (scene.autoAdvanceMs) {
      return;
    }

    const shouldDelay = scene.delayBeforeDialogue && !delayedScenes[sceneId];

    if (shouldDelay) {
      setDialogueVisible(false);
      const timer = window.setTimeout(() => {
        setDialogueVisible(true);
        setDelayedScenes((current) => ({
          ...current,
          [sceneId]: true,
        }));
      }, scene.delayBeforeDialogue);
      return () => window.clearTimeout(timer);
    }

    setDialogueVisible(true);
  }, [sceneId, scene.delayBeforeDialogue, started, delayedScenes]);

  useEffect(() => {
    if (!started) {
      return;
    }

    if (sceneId === "doha-event-2f" && !awardedScenes[sceneId]) {
      setAffection((current) => ({
        ...current,
        doha: (current.doha ?? 0) + 20,
      }));
      setAwardedScenes((current) => ({
        ...current,
        [sceneId]: true,
      }));
    }
  }, [sceneId, started, awardedScenes]);

  const availableChoices = useMemo(
    () =>
      scene.choices?.filter(
        (choice) =>
          !choice.requiredSeenSceneId || seenScenes[choice.requiredSeenSceneId],
      ) ?? [],
    [scene.choices, seenScenes],
  );
  const choicesAvailable = Boolean(
    dialogueVisible &&
    !scene.autoAdvanceMs &&
    scene.choices &&
    !isSceneTransitioning &&
    !isCharacterExitingForChoices &&
    availableChoices.length > 0,
  );
  const choicesVisible = choicesAvailable;
  const hideCharacterForChoices = Boolean(
    scene.character &&
    scene.choices &&
    dialogueVisible &&
    availableChoices.length > 0 &&
    (choicesVisible || isSceneTransitioning),
  );
  const shouldFadeInDelayedContent = Boolean(
    scene.delayBeforeDialogue && delayedScenes[sceneId],
  );
  const shouldFadeInSceneUi = sceneUiFadeInId === sceneId;

  useEffect(() => {
    if (!started || isEndingCreditsScene) {
      return;
    }

    const targetSceneIds = new Set<string>();
    const nextSceneId = resolveSceneNextScene(scene);

    if (dialogueVisible && nextSceneId) {
      targetSceneIds.add(nextSceneId);
    }

    if (dialogueVisible && scene.choices) {
      availableChoices.forEach((choice) => {
        targetSceneIds.add(resolveChoiceNextScene(choice));
      });
    }

    targetSceneIds.forEach((targetSceneId) => {
      const targetScene = scenes[targetSceneId];
      if (targetScene && targetScene.background !== scene.background) {
        void preloadBackground(targetScene.background);
      }
    });
  }, [
    availableChoices,
    affection,
    dialogueVisible,
    isEndingCreditsScene,
    scene,
    sceneId,
    seenScenes,
    started,
  ]);

  return (
    <main className="game-shell">
      <div className="game-screen">
        {isGalleryOpen ? (
          <Gallery
            collectedImages={collectedGalleryImages}
            onClose={closeGallery}
          />
        ) : isGuideOpen ? (
          <section
            className="guide-screen"
            role="button"
            tabIndex={0}
            style={{
              opacity: isGuideExiting ? 0 : 1,
              transition: `opacity ${GUIDE_TRANSITION_MS}ms ease-in-out`,
              pointerEvents: isGuideExiting ? "none" : "auto",
            }}
            onClick={startIntroFromGuide}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                startIntroFromGuide();
              }
            }}
          >
            <img className="guide-screen__image" src={guideImageUrl} alt="" />
          </section>
        ) : !started ? (
          <section
            className="title-screen"
            style={{
              backgroundImage: `url(${titleBackgroundUrl})`,
              opacity: titleOpacity,
              transition: "opacity 400ms ease-in-out",
              pointerEvents: isStarting ? "none" : "auto",
            }}
          >
            <div
              className={`title-screen__content${galleryUnlocked ? " title-screen__content--with-gallery" : ""}`}
            >
              <button
                className="title-screen__button title-screen__button--large"
                type="button"
                onClick={startGame}
                disabled={isStarting}
                aria-label="시작하기"
              >
                <img
                  className="title-screen__button-image"
                  src={startButtonUrl}
                  alt=""
                />
              </button>
              {galleryUnlocked && (
                <button
                  className="title-screen__button title-screen__button--gallery"
                  type="button"
                  onClick={openGallery}
                  disabled={isStarting}
                  aria-label="갤러리"
                >
                  <img
                    className="title-screen__button-image"
                    src={galleryButtonUrl}
                    alt=""
                  />
                </button>
              )}
            </div>
          </section>
        ) : (
          <div
            className="game-scene-content"
            style={{
              opacity: sceneContentOpacity,
              transition: `opacity ${sceneContentTransitionMs}ms ease-in-out`,
            }}
          >
            {isEndingCreditsScene ? (
              <section
                className="ending-credits-screen"
                style={
                  {
                    "--ending-credits-wide": `url(${endingCreditsWideUrl})`,
                  } as React.CSSProperties
                }
              >
                <button
                  className="ending-credits-screen__button"
                  type="button"
                  onClick={restart}
                >
                  처음으로
                </button>
              </section>
            ) : (
              <>
                <CharacterStage
                  background={scene.background}
                  backgroundOpacity={scene.backgroundFade ? stageOpacity : 1}
                  character={
                    hideCharacterForChoices ? undefined : scene.character
                  }
                  characterExpression={scene.characterExpression}
                  animate={
                    (shouldFadeInDelayedContent || shouldFadeInSceneUi) &&
                    !isCharacterExitingForChoices
                  }
                  fadeOut={isCharacterExitingForChoices}
                  fadeTransitionMs={
                    scene.backgroundFade
                      ? (scene.fadeOutMs ?? scene.fadeInMs ?? 1200)
                      : undefined
                  }
                  hideContent={Boolean(
                    (scene.delayBeforeDialogue && !dialogueVisible) ||
                    (scene.autoAdvanceMs &&
                      !dialogueVisible &&
                      !scene.backgroundFade),
                  )}
                />
                {scene.clickToContinue && scene.nextSceneId && (
                  <button
                    className={`ending-image-continue${
                      isEndingImageFading ? " ending-image-continue--fading" : ""
                    }`}
                    type="button"
                    disabled={isEndingImageFading}
                    aria-label="엔딩 크레딧으로 이동"
                    onClick={() =>
                      continueFromEndingImage(scene.nextSceneId as string)
                    }
                  />
                )}
                {dialogueVisible && !scene.autoAdvanceMs && !scene.clickToContinue && (
                  <>
                    {(sceneId === "show-affection" ||
                      sceneId === "show-affection-day-2") && (
                      <div className="affection-panel">
                        <h2 className="affection-panel__title">애정도</h2>
                        <div className="affection-panel__content">
                          <div className="affection-item">
                            <span className="affection-item__name">이안</span>
                            <span className="affection-item__value">
                              {affection.ian ?? 0}
                            </span>
                          </div>
                          <div className="affection-item">
                            <span className="affection-item__name">도하</span>
                            <span className="affection-item__value">
                              {affection.doha ?? 0}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <DialogueBox
                      animate={
                        shouldFadeInDelayedContent || shouldFadeInSceneUi
                      }
                      canContinue={
                        Boolean(scene.nextSceneId) &&
                        !isSceneTransitioning &&
                        !isCharacterExitingForChoices
                      }
                      canGoBack={
                        history.length > 0 &&
                        !isSceneTransitioning &&
                        !isCharacterExitingForChoices
                      }
                      onContinue={() =>
                        resolveSceneNextScene(scene) &&
                        goToScene(resolveSceneNextScene(scene) as string)
                      }
                      onGoBack={goBack}
                      speakerName={speakerName}
                      text={scene.text}
                    />
                    {choicesVisible && availableChoices.length > 0 && (
                      <ChoiceList
                        choices={availableChoices}
                        onSelect={selectChoice}
                      />
                    )}
                    {scene.ending && (
                      <button
                        className="restart-button restart-button--white"
                        type="button"
                        onClick={restart}
                      >
                        <span className="restart-button__icon">⟵</span>
                        처음부터
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
