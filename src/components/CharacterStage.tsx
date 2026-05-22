import { useEffect, useState } from "react";
import type { CharacterExpression, CharacterId } from "../types/game";
import { getCharacter } from "../data/characters";
import {
  getBackgroundPlaceholderUrl,
  getBackgroundUrl,
  isBackgroundLoaded,
  preloadBackground,
} from "../utils/backgroundAssets";

const backgroundLabels: Record<string, string> = {
  "club-room": "동아리방",
  "evening-street": "저녁 거리",
  morning_street: "아침 푸른마을 아파트 앞",
  library: "도서관",
  "school-yard": "교실 복도",
  "classroom-hallway": "교실 복도",
  school_store: "매점",
  nurses_office: "양호실",
  night_street: "저녁 집앞",
  small_theater: "폐쇄된 소극장",
  heroine_ending: "엔딩",
  heroine_key: "열쇠",
  heroine_room: "하린의 방",
  "heroine-room": "하린의 방",
  heroine_room_night: "하린의 방",
  park: "공원",
  Field: "운동장",
  field: "운동장",
  title: "두근두근클럽",
  ian_event_1: "이안 이벤트",
  ian_event_1_1: "이안 이벤트",
  morning_rooftop: "아침 옥상",
  class_room: "교실",
  doha_event_1: "도하 이벤트",
  doha_event_2: "도하 이벤트",
  doha_event_3: "도하 이벤트",
  doha_event_4: "도하 이벤트",
  doha_event_5: "도하 이벤트",
  doha_event_6: "도하 이벤트",
  doha_event_6_1: "도하 이벤트",
  doha_event_ending: "도하 엔딩",
  doha_event_ending_1: "도하 엔딩",
  doha_event_ending_2: "도하 엔딩",
  doha_event_ending_3: "도하 엔딩",
  doha_event_ending_end: "도하 엔딩",
  ian_event_2: "이안 이벤트",
  ian_event_3: "이안 이벤트",
  ian_event_4: "이안 이벤트",
  ian_event_5: "이안 이벤트",
  ian_event_6: "이안 이벤트",
  ian_event_6_1: "이안 이벤트",
  ian_event_ending: "이안 엔딩",
  ian_event_ending_1: "이안 엔딩",
  ian_event_ending_2: "이안 엔딩",
  ian_event_ending_3: "이안 엔딩",
  ian_event_ending_end: "이안 엔딩",
  combi_event_1: "연극제 이벤트",
  combi_event_1_2: "연극제 이벤트",
  combi_event_1_3: "연극제 이벤트",
  seoin_event_1: "서인 이벤트",
  seoin_event_2: "서인 이벤트",
  seoin_event_2_1: "서인 이벤트",
  seoin_event_3: "서인 이벤트",
  seoin_event_4: "서인 이벤트",
  seoin_event_4_1: "서인 이벤트",
  seoin_event_5: "서인 이벤트",
  seoin_event_6: "서인 이벤트",
  seoin_event_7: "서인 이벤트",
  seoin_event_7_1: "서인 이벤트",
  seoin_event_8: "서인 이벤트",
  seoin_event_8_1: "서인 이벤트",
  seoin_event_8_2: "서인 이벤트",
  seoin_event_8_3: "서인 이벤트",
  seoin_event_ending_1: "서인 엔딩",
  seoin_event_ending_2: "서인 엔딩",
  seoin_event_ending_end: "서인 엔딩",
  seoin_event_ending_end_1: "서인 엔딩",
  sub_schoolzone_morning: "신관 뒤편 길",
  sub_schoolzone_night: "밤의 신관 뒤편 길",
};

const hiddenBackgroundLabels = new Set([
  "heroine_room_night",
  "title_1",
  "ian_event_ending_end",
  "doha_event_ending_end",
  "seoin_event_ending_end",
  "seoin_event_ending_end_1",
]);

type CharacterStageProps = {
  character?: CharacterId;
  characterExpression?: CharacterExpression;
  background: string;
  hideContent?: boolean;
  backgroundOpacity?: number;
  fadeTransitionMs?: number;
  animate?: boolean;
  fadeOut?: boolean;
};

export function CharacterStage({
  character,
  characterExpression = "default",
  background,
  hideContent = false,
  backgroundOpacity = 1,
  fadeTransitionMs,
  animate = false,
  fadeOut = false,
}: CharacterStageProps) {
  const activeCharacter = character ? getCharacter(character) : undefined;
  const imageSrc = activeCharacter?.expressions?.[characterExpression];
  const backgroundUrl = getBackgroundUrl(background);
  const backgroundPlaceholderUrl = getBackgroundPlaceholderUrl(background);
  const [backgroundReady, setBackgroundReady] = useState(() =>
    isBackgroundLoaded(background),
  );
  const fadeDuration = fadeTransitionMs ?? 1200;
  const showBackgroundLabel =
    !hideContent && !hiddenBackgroundLabels.has(background);

  useEffect(() => {
    let active = true;

    setBackgroundReady(isBackgroundLoaded(background));
    preloadBackground(background).then(() => {
      if (active) {
        setBackgroundReady(true);
      }
    });

    return () => {
      active = false;
    };
  }, [background]);

  return (
    <section
      className={`stage stage--${background} ${hideContent ? "stage--highlight" : ""}`}
    >
      {backgroundPlaceholderUrl && (
        <div
          className={`stage__background-placeholder${
            backgroundReady ? " stage__background-placeholder--hidden" : ""
          }`}
          style={
            {
              backgroundImage: `linear-gradient(180deg, rgba(20,16,24,0.34), rgba(14,11,18,0.56)), url(${backgroundPlaceholderUrl})`,
              transition: `opacity ${Math.min(fadeDuration, 700)}ms ease-in-out`,
            } as React.CSSProperties
          }
        />
      )}
      {backgroundUrl && (
        <div
          className={`stage__background${
            backgroundReady ? " stage__background--ready" : ""
          }`}
          style={
            {
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.12), rgba(39,32,46,0.18)), url(${backgroundUrl})`,
              opacity: backgroundReady ? backgroundOpacity : 0,
              transition: `opacity ${fadeDuration}ms ease-in-out`,
            } as React.CSSProperties
          }
        />
      )}
      {backgroundUrl && !backgroundReady && (
        <div className="stage__loading" aria-label="배경 이미지 로딩 중">
          <span className="stage__loading-spinner" />
        </div>
      )}
      {showBackgroundLabel && (
        <div className="stage__label">
          {backgroundLabels[background] ?? background}
        </div>
      )}
      {!hideContent && activeCharacter ? (
        <div
          className={`character-standee${animate ? " character-standee--fade-in" : ""}${fadeOut ? " character-standee--fade-out" : ""}`}
          style={{ "--accent": activeCharacter.color } as React.CSSProperties}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={activeCharacter.name}
              className="character-standee__image"
            />
          ) : (
            <div className="character-standee__portrait">
              {activeCharacter.name}
            </div>
          )}
        </div>
      ) : (
        !hideContent && <div className="stage__empty" />
      )}
      {hideContent && <div className="stage__overlay" />}
    </section>
  );
}
