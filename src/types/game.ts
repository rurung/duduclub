export type CharacterId = "heroine" | "heroine-grow" | "ian" | "doha" | "seoin";

export type CharacterExpression =
  | "default"
  | "happy"
  | "embarrassed"
  | "dark"
  | "darkEmbarrassed"
  | "rage";

export type Character = {
  id: CharacterId;
  name: string;
  role: "heroine" | "love-interest" | "teacher";
  color: string;
  description: string;
  expressions?: Partial<Record<CharacterExpression, string>>;
};

export type Affection = Partial<Record<CharacterId, number>>;

export type GameHistoryEntry = {
  sceneId: string;
  affection: Affection;
  gameDate: { year: number; month: number; day: number };
  delayedScenes: Record<string, boolean>;
  awardedScenes: Record<string, boolean>;
  seenScenes: Record<string, boolean>;
};

export type Choice = {
  text: string;
  nextSceneId: string;
  /** 지정 캐릭터들의 애정도가 같을 때 이동할 씬 */
  nextSceneIdWhenAffectionEqual?: string;
  affectionEqualBetween?: CharacterId[];
  /** 지정한 씬을 본 적이 있을 때만 선택지를 보여준다. */
  requiredSeenSceneId?: string;
  affection?: Affection;
};

export type ConditionalNextScene = {
  nextSceneId: string;
  requiredSeenSceneId?: string;
  affectionGreaterThan?: {
    character: CharacterId;
    value: number;
  };
  higherAffectionThan?: {
    first: CharacterId;
    second: CharacterId;
  };
};

export type Scene = {
  id: string;
  background: string;
  speaker: CharacterId | "narrator";
  /** 화자 이름을 직접 지정할 때 사용한다. (아이, 축구부 등) */
  speakerLabel?: string;
  text: string;
  character?: CharacterId;
  characterExpression?: CharacterExpression;
  choices?: Choice[];
  nextSceneId?: string;
  conditionalNextSceneIds?: ConditionalNextScene[];
  ending?: boolean;
  delayBeforeDialogue?: number;
  /** 대사 없이 배경만 보여준 뒤 자동으로 nextSceneId로 이동한다. */
  autoAdvanceMs?: number;
  /** UI 없이 배경을 보여주고 화면 클릭으로 nextSceneId로 이동한다. */
  clickToContinue?: boolean;
  /** 배경 페이드 인·아웃 전환 (autoAdvanceMs는 완전히 보인 뒤 유지 시간) */
  backgroundFade?: boolean;
  fadeInMs?: number;
  fadeOutMs?: number;
  /** 이 씬을 떠날 때 게임 날짜를 하루 진행한다. */
  advanceDayOnExit?: boolean;
};
