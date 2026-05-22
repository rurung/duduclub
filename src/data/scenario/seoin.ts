import type { Scene } from "../../types/game";

// 서인 루트: 신관, 폐쇄된 소극장, 비 오는 밤, 과거 사건과 진 엔딩
export const seoinScenes: Record<string, Scene> = {
  "day-2-seoin-path-start": {
    id: "day-2-seoin-path-start",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "어쩐지 살짝 어둡고 으스스한 느낌인데.. 그냥 다시 정문으로 돌아갈까..",
    nextSceneId: "day-2-seoin-path-choice",
  },

  "day-2-seoin-path-choice": {
    id: "day-2-seoin-path-choice",
    background: "sub_schoolzone_morning",
    speaker: "narrator",
    text: "어떻게 할까?",
    choices: [
      {
        text: "그냥 정문을 통해 교실로 얼른 돌아간다",
        nextSceneId: "day-2-classroom",
      },
      {
        text: "으스스하지만 신관으로 들어가볼까?",
        nextSceneId: "day-2-seoin-event-1",
      },
    ],
  },

  "day-2-seoin-event-1": {
    id: "day-2-seoin-event-1",
    background: "seoin_event_1",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 3000,
    nextSceneId: "day-2-seoin-event-1-harin",
  },

  "day-2-seoin-event-1-harin": {
    id: "day-2-seoin-event-1-harin",
    background: "seoin_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아..아니다..일단 오늘은 정문으로 가자! (이상한 시선이 느껴져...)",
    nextSceneId: "day-2-classroom",
  },

  "day-3-seoin-path-start": {
    id: "day-3-seoin-path-start",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "여긴 지날 때마다 으스스하단 말이지... 전에 선배들이 이 신관에 폐 소극장이 있었다고 이야기했었는데.",
    nextSceneId: "day-3-seoin-old-theater",
  },

  "day-3-seoin-old-theater": {
    id: "day-3-seoin-old-theater",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "정말 그런 게 있을까?",
    nextSceneId: "day-3-seoin-hears-scream",
  },

  "day-3-seoin-hears-scream": {
    id: "day-3-seoin-hears-scream",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "어?",
    nextSceneId: "day-3-seoin-girl-scream",
  },

  "day-3-seoin-girl-scream": {
    id: "day-3-seoin-girl-scream",
    background: "sub_schoolzone_morning",
    speaker: "narrator",
    speakerLabel: "?",
    text: "꺅!!",
    nextSceneId: "day-3-seoin-collision",
  },

  "day-3-seoin-collision": {
    id: "day-3-seoin-collision",
    background: "seoin_event_2",
    speaker: "narrator",
    text: "복도 모퉁이에서 여학생이 서인 선생님과 부딪히는 장면이 하린의 눈에 들어왔다.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-3-seoin-student-apology",
  },

  "day-3-seoin-student-apology": {
    id: "day-3-seoin-student-apology",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "여학생",
    text: "아이고... 아파라... 선생님, 너무 죄송해요!",
    nextSceneId: "day-3-seoin-glasses",
  },

  "day-3-seoin-glasses": {
    id: "day-3-seoin-glasses",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "여학생",
    text: "저기, 안경이 여기 떨어져 있어요.",
    nextSceneId: "day-3-seoin-soft-1",
  },

  "day-3-seoin-soft-1": {
    id: "day-3-seoin-soft-1",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "아니야. 나도 앞을 제대로 못 보고 걸었던 것 같아. 학생이 다치지 않은 게 먼저지.",
    nextSceneId: "day-3-seoin-soft-2",
  },

  "day-3-seoin-soft-2": {
    id: "day-3-seoin-soft-2",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "어디 다친 데는 없어? 양호실로 데려다줄까?",
    nextSceneId: "day-3-seoin-student-joke",
  },

  "day-3-seoin-student-joke": {
    id: "day-3-seoin-student-joke",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "여학생",
    text: "선생님, 그렇게 친절하신 거 유죄인 거 아시죠?",
    nextSceneId: "day-3-seoin-soft-3",
  },

  "day-3-seoin-soft-3": {
    id: "day-3-seoin-soft-3",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "유... 뭐? 요즘 학생들은 농담도 재미있게 하네.",
    nextSceneId: "day-3-seoin-student-praise",
  },

  "day-3-seoin-student-praise": {
    id: "day-3-seoin-student-praise",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "여학생",
    text: "선생님은 우리 학교의 빛과 소금이란 말이에요!",
    nextSceneId: "day-3-seoin-soft-4",
  },

  "day-3-seoin-soft-4": {
    id: "day-3-seoin-soft-4",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "그렇게 봐줘서 고마운데? 그래도 일단 양호실로 먼저 가볼래?",
    nextSceneId: "day-3-seoin-student-run",
  },

  "day-3-seoin-student-run": {
    id: "day-3-seoin-student-run",
    background: "seoin_event_2",
    speaker: "narrator",
    speakerLabel: "여학생",
    text: "아니요! 괜찮다구요!",
    nextSceneId: "day-3-seoin-student-leaves",
  },

  "day-3-seoin-student-leaves": {
    id: "day-3-seoin-student-leaves",
    background: "seoin_event_2",
    speaker: "narrator",
    text: "여학생은 그렇게 괜찮다는 말을 남기고 복도 끝으로 달려 사라졌다.",
    nextSceneId: "day-3-seoin-harin-worry",
  },

  "day-3-seoin-harin-worry": {
    id: "day-3-seoin-harin-worry",
    background: "seoin_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "으으... 아프시겠다...",
    nextSceneId: "day-3-seoin-after-choice",
  },

  "day-3-seoin-after-choice": {
    id: "day-3-seoin-after-choice",
    background: "seoin_event_2",
    speaker: "narrator",
    text: "어떻게 할까?",
    choices: [
      {
        text: "집으로 돌아가자",
        nextSceneId: "day-3-seoin-return-home",
      },
      {
        text: "아니..나 방금 샤프 떨어뜨리고 온거같은데? 주우러 가야지",
        nextSceneId: "day-3-seoin-sharp",
        affection: { seoin: 20 },
      },
    ],
  },

  "day-3-seoin-return-home": {
    id: "day-3-seoin-return-home",
    background: "evening-street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아... 뭔가 찜찜한데. 그래도 오늘은 그냥 집에 가자.",
    nextSceneId: "day-3-seoin-home-reflection",
  },

  "day-3-seoin-sharp": {
    id: "day-3-seoin-sharp",
    background: "seoin_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "어?..",
    nextSceneId: "day-3-seoin-cold-look",
  },

  "day-3-seoin-cold-look": {
    id: "day-3-seoin-cold-look",
    background: "seoin_event_2_1",
    speaker: "narrator",
    text: "그 자리에는 조금 전의 친절했던 선생님은 온데간데없고, 싸늘한 표정만 남은 한 사람이 서 있었다.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-3-seoin-harin-shock",
  },

  "day-3-seoin-harin-shock": {
    id: "day-3-seoin-harin-shock",
    background: "seoin_event_2_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아...",
    nextSceneId: "day-3-seoin-run-away",
  },

  "day-3-seoin-run-away": {
    id: "day-3-seoin-run-away",
    background: "seoin_event_2_1",
    speaker: "narrator",
    text: "하린은 잘못 본 거라 생각하고 고개를 저으며 다시 집 쪽으로 뛰었다.",
    nextSceneId: "day-3-seoin-park",
  },

  "day-3-seoin-park": {
    id: "day-3-seoin-park",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "내가 본 게 도대체 뭐지?...",
    nextSceneId: "day-3-seoin-home-reflection",
  },

  "day-3-seoin-home-reflection": {
    id: "day-3-seoin-home-reflection",
    background: "heroine-room",
    speaker: "narrator",
    text: "하린은 방에 돌아와서도 신관 복도에서 보았던 장면을 쉽게 떨쳐내지 못했다.",
    nextSceneId: "day-3-home-sleep",
  },

  "day-4-seoin-path-start": {
    id: "day-4-seoin-path-start",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "에이... 내가 누구한테 이걸 줘. 그냥 가방에 넣어두자.",
    nextSceneId: "day-4-seoin-path-draw",
    conditionalNextSceneIds: [
      {
        requiredSeenSceneId: "day-3-seoin-collision",
        nextSceneId: "day-4-seoin-small-theater-lost",
      },
    ],
  },

  "day-4-seoin-small-theater-lost": {
    id: "day-4-seoin-small-theater-lost",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "어?.. 여기는 못 보던 곳인데..",
    nextSceneId: "day-4-seoin-small-theater-enter",
  },

  "day-4-seoin-small-theater-enter": {
    id: "day-4-seoin-small-theater-enter",
    background: "small_theater",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이런 곳도 있었구나...",
    nextSceneId: "day-4-seoin-small-theater-shine",
  },

  "day-4-seoin-small-theater-shine": {
    id: "day-4-seoin-small-theater-shine",
    background: "small_theater",
    speaker: "narrator",
    text: "구석에서 반짝거리는 무언가가 보였다.",
    nextSceneId: "day-4-seoin-small-theater-key-cg",
  },

  "day-4-seoin-small-theater-key-cg": {
    id: "day-4-seoin-small-theater-key-cg",
    background: "heroine_key",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    nextSceneId: "day-4-seoin-small-theater-key",
  },

  "day-4-seoin-small-theater-key": {
    id: "day-4-seoin-small-theater-key",
    background: "small_theater",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "어? 이건... 열쇠잖아?",
    nextSceneId: "day-4-seoin-small-theater-key-info",
  },

  "day-4-seoin-small-theater-key-info": {
    id: "day-4-seoin-small-theater-key-info",
    background: "small_theater",
    speaker: "narrator",
    text: "그것은 이 폐쇄된 소극장 문을 여는 열쇠였다.",
    nextSceneId: "day-4-seoin-small-theater-poster-found",
  },

  "day-4-seoin-small-theater-poster-found": {
    id: "day-4-seoin-small-theater-poster-found",
    background: "small_theater",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "벽에... 이런 포스터가 있었네?..",
    nextSceneId: "day-4-seoin-small-theater-poster",
  },

  "day-4-seoin-small-theater-poster": {
    id: "day-4-seoin-small-theater-poster",
    background: "seoin_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: '"기억 속의... 무대?" 연극부 정기공연... 정말 오래전에 했던 거네.',
    delayBeforeDialogue: 2000,
    nextSceneId: "day-4-seoin-small-theater-poster-look",
  },

  "day-4-seoin-small-theater-poster-look": {
    id: "day-4-seoin-small-theater-poster-look",
    background: "seoin_event_3",
    speaker: "narrator",
    text: "하린은 그 포스터를 유심히 보았다. 그런데 어딘가, 지금의 자기 모습과 닮아 있는 느낌이 들었다.",
    nextSceneId: "day-4-seoin-small-theater-poster-memory",
  },

  "day-4-seoin-small-theater-poster-memory": {
    id: "day-4-seoin-small-theater-poster-memory",
    background: "seoin_event_4_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "마치 나랑 이안 선배... 도하 선배 같은 느낌이네.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-4-seoin-small-theater-sad",
  },

  "day-4-seoin-small-theater-sad": {
    id: "day-4-seoin-small-theater-sad",
    background: "seoin_event_4_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "기억 속의 무대... 뭔가 안타까운 마음이 드는 건 왜일까?",
    nextSceneId: "day-4-seoin-small-theater-leave",
  },

  "day-4-seoin-small-theater-leave": {
    id: "day-4-seoin-small-theater-leave",
    background: "seoin_event_4_1",
    speaker: "narrator",
    text: "한참을 그 포스터를 바라보다 하린은 조심스럽게 자리를 뜨고 집으로 향했다.",
    nextSceneId: "day-4-seoin-small-theater-seoin",
  },

  "day-4-seoin-small-theater-seoin": {
    id: "day-4-seoin-small-theater-seoin",
    background: "sub_schoolzone_night",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "rage",
    text: "그건 어디서 찾았니...?",
    nextSceneId: "day-4-seoin-small-theater-key-stare",
  },

  "day-4-seoin-small-theater-key-stare": {
    id: "day-4-seoin-small-theater-key-stare",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "하린의 손에 쥐어진 반짝거리는 열쇠를 보며, 서늘한 표정으로 바라보는 서인 선생님이 눈에 들어왔다.",
    nextSceneId: "day-4-seoin-small-theater-freeze",
  },

  "day-4-seoin-small-theater-freeze": {
    id: "day-4-seoin-small-theater-freeze",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "하린은 그 자리에서 움직일 수 없었다.",
    nextSceneId: "day-4-seoin-small-theater-harin-stammer",
  },

  "day-4-seoin-small-theater-harin-stammer": {
    id: "day-4-seoin-small-theater-harin-stammer",
    background: "sub_schoolzone_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네..?.. 아.. 이게... 저..",
    nextSceneId: "day-4-seoin-small-theater-glasses",
  },

  "day-4-seoin-small-theater-glasses": {
    id: "day-4-seoin-small-theater-glasses",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "서인 선생님은 갑자기 안경을 다시 쓴 후, 이내 부드럽게 웃었다.",
    nextSceneId: "day-4-seoin-small-theater-sorry",
  },

  "day-4-seoin-small-theater-sorry": {
    id: "day-4-seoin-small-theater-sorry",
    background: "sub_schoolzone_night",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "happy",
    text: "미안해, 놀랐지?",
    nextSceneId: "day-4-seoin-small-theater-face-change",
  },

  "day-4-seoin-small-theater-face-change": {
    id: "day-4-seoin-small-theater-face-change",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "선생님의 표정이 갑자기 달라졌다.",
    nextSceneId: "day-4-seoin-small-theater-harin-leave",
  },

  "day-4-seoin-small-theater-harin-leave": {
    id: "day-4-seoin-small-theater-harin-leave",
    background: "sub_schoolzone_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아.. 네... 맞아요, 놀랐어요. 선생님, 저 이만 가볼게요.",
    nextSceneId: "day-4-seoin-small-theater-seoin-bye",
  },

  "day-4-seoin-small-theater-seoin-bye": {
    id: "day-4-seoin-small-theater-seoin-bye",
    background: "sub_schoolzone_night",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "그래. 조심히 가.",
    nextSceneId: "day-4-seoin-small-theater-harin-runs",
  },

  "day-4-seoin-small-theater-harin-runs": {
    id: "day-4-seoin-small-theater-harin-runs",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "하린은 허둥지둥 신관을 빠져나갔다.",
    nextSceneId: "day-4-seoin-small-theater-failed-play",
  },

  "day-4-seoin-small-theater-failed-play": {
    id: "day-4-seoin-small-theater-failed-play",
    background: "sub_schoolzone_night",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그 공연은 실패했어...",
    nextSceneId: "day-4-seoin-small-theater-night-street",
  },

  "day-4-seoin-small-theater-night-street": {
    id: "day-4-seoin-small-theater-night-street",
    background: "night_street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "저 사람... 너무 무서워.",
    nextSceneId: "day-4-seoin-small-theater-room",
  },

  "day-4-seoin-small-theater-room": {
    id: "day-4-seoin-small-theater-room",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "방금 그 표정... 분명 내가 아는 다정한 선생님이 아니었어.",
    nextSceneId: "day-4-seoin-home-sleep",
  },

  "day-4-seoin-path-draw": {
    id: "day-4-seoin-path-draw",
    background: "sub_schoolzone_morning",
    speaker: "narrator",
    text: "괜히 마음이 어수선해진 하린은 사람 많은 길을 피해 신관 쪽 길로 발걸음을 돌렸다.",
    nextSceneId: "day-4-seoin-collision",
  },

  "day-4-seoin-collision": {
    id: "day-4-seoin-collision",
    background: "seoin_event_4",
    speaker: "narrator",
    text: "신관으로 이어지는 길목에서, 한 학생이 서인 선생님과 부딪히는 장면이 눈에 들어왔다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-4-seoin-student",
  },

  "day-4-seoin-student": {
    id: "day-4-seoin-student",
    background: "seoin_event_4",
    speaker: "narrator",
    speakerLabel: "학생",
    text: "죄, 죄송합니다! 앞을 제대로 못 봤어요!",
    nextSceneId: "day-4-seoin-soft",
  },

  "day-4-seoin-soft": {
    id: "day-4-seoin-soft",
    background: "seoin_event_4",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "괜찮습니다. 다친 곳은 없나요?",
    nextSceneId: "day-4-seoin-harin-approach",
  },

  "day-4-seoin-harin-approach": {
    id: "day-4-seoin-harin-approach",
    background: "seoin_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선생님...?",
    nextSceneId: "day-4-seoin-small-talk",
  },

  "day-4-seoin-small-talk": {
    id: "day-4-seoin-small-talk",
    background: "seoin_event_4",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "아, 하린 학생이군요. 오늘은 이쪽 길로 등교하나요?",
    nextSceneId: "day-4-seoin-harin-answer",
  },

  "day-4-seoin-harin-answer": {
    id: "day-4-seoin-harin-answer",
    background: "seoin_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "네. 그냥... 사람이 적은 길로 가고 싶어서요.",
    nextSceneId: "day-4-seoin-small-talk-2",
  },

  "day-4-seoin-small-talk-2": {
    id: "day-4-seoin-small-talk-2",
    background: "seoin_event_4",
    speaker: "narrator",
    speakerLabel: "서인 선생님",
    text: "그럴 때도 있죠. 그래도 신관 쪽은 아직 공사 구역이 남아 있으니 조심하세요.",
    nextSceneId: "day-4-seoin-leave",
  },

  "day-4-seoin-leave": {
    id: "day-4-seoin-leave",
    background: "sub_schoolzone_morning",
    speaker: "narrator",
    text: "짧은 인사를 마친 하린은 다시 교실 쪽으로 걸음을 옮기려 했다.",
    nextSceneId: "day-4-seoin-turn-back",
  },

  "day-4-seoin-turn-back": {
    id: "day-4-seoin-turn-back",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아, 맞다. 선생님께 아까 그 공사 구역에 대해 물어볼 게...",
    nextSceneId: "day-4-seoin-cold-look",
  },

  "day-4-seoin-cold-look": {
    id: "day-4-seoin-cold-look",
    background: "seoin_event_4_1",
    speaker: "narrator",
    text: "뒤돌아선 순간, 하린은 방금 전과는 전혀 다른 서인 선생님의 싸늘한 표정을 보았다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-4-seoin-chill",
  },

  "day-4-seoin-chill": {
    id: "day-4-seoin-chill",
    background: "seoin_event_4_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "방금... 내가 잘못 본 건가?",
    nextSceneId: "day-4-seoin-go-home",
  },

  "day-4-seoin-go-home": {
    id: "day-4-seoin-go-home",
    background: "evening-street",
    speaker: "narrator",
    text: "하린은 하루 종일 그 표정을 떠올렸다. 설명하기 어려운 찜찜함을 안은 채, 결국 곧장 집으로 돌아갔다.",
    nextSceneId: "day-4-seoin-home-reflection",
  },

  "day-4-seoin-home-reflection": {
    id: "day-4-seoin-home-reflection",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아침에는 분명 다정하게 웃고 계셨는데... 그 표정은 뭐였지?",
    nextSceneId: "day-4-seoin-home-reflection-2",
  },

  "day-4-seoin-home-reflection-2": {
    id: "day-4-seoin-home-reflection-2",
    background: "heroine-room",
    speaker: "narrator",
    text: "책상 위에 놓인 초콜릿 상자보다, 신관 복도에서 본 서인 선생님의 차가운 눈빛이 더 오래 마음에 남았다.",
    nextSceneId: "day-4-seoin-home-sleep",
  },

  "day-4-seoin-home-sleep": {
    id: "day-4-seoin-home-sleep",
    background: "heroine_room_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "괜히 생각하면 더 이상해질 것 같아... 일단 자자.",
    nextSceneId: "heroine-room-night-day-4",
  },

  "day-5-seoin-clubroom-start": {
    id: "day-5-seoin-clubroom-start",
    background: "club-room",
    speaker: "narrator",
    text: "동아리방에는 연극제 준비로 대본과 소품이 어지럽게 펼쳐져 있었다.",
    nextSceneId: "day-5-seoin-clubroom-harin-question",
  },

  "day-5-seoin-clubroom-harin-question": {
    id: "day-5-seoin-clubroom-harin-question",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배들, 혹시 신관 쪽에 폐쇄된 소극장이 있었다는 이야기 들어본 적 있어요?",
    nextSceneId: "day-5-seoin-clubroom-ian-answer",
  },

  "day-5-seoin-clubroom-ian-answer": {
    id: "day-5-seoin-clubroom-ian-answer",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "폐쇄된 소극장? 신관 쪽은 공사 구역이 많다는 얘기만 들었어. 그런 장소가 있었나...",
    nextSceneId: "day-5-seoin-clubroom-doha-answer",
  },

  "day-5-seoin-clubroom-doha-answer": {
    id: "day-5-seoin-clubroom-doha-answer",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "나도 잘 몰라. 애초에 그쪽은 부원들도 잘 안 가잖아. 왜? 뭔가 봤어?",
    nextSceneId: "day-5-seoin-clubroom-harin-hide",
  },

  "day-5-seoin-clubroom-harin-hide": {
    id: "day-5-seoin-clubroom-harin-hide",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아니요, 그냥... 이상한 포스터를 본 것 같아서요.",
    nextSceneId: "day-5-seoin-library-move",
  },

  "day-5-seoin-library-move": {
    id: "day-5-seoin-library-move",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "정신이 없네... 공부 좀 하다가 가야겠다.",
    nextSceneId: "day-5-seoin-library-start",
  },

  "day-5-seoin-library-start": {
    id: "day-5-seoin-library-start",
    background: "library",
    speaker: "narrator",
    text: "도서관의 조용한 공기 속에서 하린은 대본과 문제집을 번갈아 펼쳤다.",
    nextSceneId: "day-5-seoin-library-study",
  },

  "day-5-seoin-library-study": {
    id: "day-5-seoin-library-study",
    background: "library",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "글자가 눈에 들어오긴 하는데... 자꾸 그 소극장이 생각나.",
    nextSceneId: "day-5-seoin-library-night",
  },

  "day-5-seoin-library-night": {
    id: "day-5-seoin-library-night",
    background: "library",
    speaker: "narrator",
    text: "문득 고개를 들자 창밖은 어느새 어둑해져 있었다.",
    nextSceneId: "day-5-seoin-library-leave",
  },

  "day-5-seoin-library-leave": {
    id: "day-5-seoin-library-leave",
    background: "library",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "벌써 밤이네. 이제 집에 가야겠다.",
    nextSceneId: "day-5-seoin-rain-start",
  },

  "day-5-seoin-rain-start": {
    id: "day-5-seoin-rain-start",
    background: "sub_schoolzone_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "갑자기 비가 오네? 아으.. 우산 챙겨오길 잘했다.",
    nextSceneId: "day-5-seoin-rain-seoin-found",
  },

  "day-5-seoin-rain-seoin-found": {
    id: "day-5-seoin-rain-seoin-found",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "빗소리 사이로, 우산도 없이 비를 잔뜩 맞고 우두커니 서 있는 서인 선생님이 보였다.",
    nextSceneId: "day-5-seoin-rain-seoin-cg",
  },

  "day-5-seoin-rain-seoin-cg": {
    id: "day-5-seoin-rain-seoin-cg",
    background: "seoin_event_5",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 3000,
    nextSceneId: "day-5-seoin-rain-harin-umbrella",
  },

  "day-5-seoin-rain-harin-umbrella": {
    id: "day-5-seoin-rain-harin-umbrella",
    background: "seoin_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선생님! 비 이렇게 맞고 계시면 감기 걸려요. 제 우산 같이 쓰세요.",
    nextSceneId: "day-5-seoin-rain-seoin-soft",
  },

  "day-5-seoin-rain-seoin-soft": {
    id: "day-5-seoin-rain-seoin-soft",
    background: "seoin_event_5",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "하린 학생... 이런 밤에 혼자 다니면 위험해요.",
    nextSceneId: "day-5-seoin-rain-harin-answer",
  },

  "day-5-seoin-rain-harin-answer": {
    id: "day-5-seoin-rain-harin-answer",
    background: "seoin_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선생님이 더 위험해 보이는데요... 얼굴이 너무 창백하세요.",
    nextSceneId: "day-5-seoin-rain-seoin-danger",
  },

  "day-5-seoin-rain-seoin-danger": {
    id: "day-5-seoin-rain-seoin-danger",
    background: "seoin_event_5",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: ".........누군가를 좋아하는 건... 생각보다 위험한 일이야.",
    nextSceneId: "day-5-seoin-rain-choice",
  },

  "day-5-seoin-rain-choice": {
    id: "day-5-seoin-rain-choice",
    background: "seoin_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "왜 그런 말을...",
    choices: [
      {
        text: "무섭다.",
        nextSceneId: "day-5-seoin-rain-lonely",
        affection: { seoin: 5 },
      },
      {
        text: "내가 이상한것 같다..이 사람이...왜인지 외롭고 슬퍼보인다.",
        nextSceneId: "day-5-seoin-rain-lonely",
        affection: { seoin: 50 },
      },
    ],
  },

  "day-5-seoin-rain-lonely": {
    id: "day-5-seoin-rain-lonely",
    background: "sub_schoolzone_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "무서운데... 그런데 왜인지 외롭고 슬퍼 보여.",
    nextSceneId: "day-5-seoin-rain-seoin-silence",
  },

  "day-5-seoin-rain-seoin-silence": {
    id: "day-5-seoin-rain-seoin-silence",
    background: "sub_schoolzone_night",
    speaker: "narrator",
    text: "서인 선생님은 아무 대답도 하지 않았다. 빗물이 안경 끝에서 조용히 떨어졌다.",
    nextSceneId: "day-5-seoin-rain-harin-confused",
  },

  "day-5-seoin-rain-harin-confused": {
    id: "day-5-seoin-rain-harin-confused",
    background: "sub_schoolzone_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "내가 왜... 이 사람에게 이런 감정이 드는 거지?",
    nextSceneId: "day-5-seoin-return-home",
  },

  "day-5-seoin-return-home": {
    id: "day-5-seoin-return-home",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "무섭다고 생각했는데, 동시에 그냥 지나칠 수가 없었어.",
    nextSceneId: "day-5-seoin-home-reflection",
  },

  "day-5-seoin-home-reflection": {
    id: "day-5-seoin-home-reflection",
    background: "heroine-room",
    speaker: "narrator",
    text: "비에 젖은 서인 선생님의 목소리와, 폐쇄된 소극장의 낡은 포스터가 하린의 머릿속에서 오래도록 겹쳐졌다.",
    nextSceneId: "day-5-seoin-home-sleep",
  },

  "day-5-seoin-home-sleep": {
    id: "day-5-seoin-home-sleep",
    background: "heroine_room_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "내일이 되면... 이 마음이 조금은 정리될까?",
    nextSceneId: "heroine-room-night-day-5-seoin",
  },

  "heroine-room-night-day-5-seoin": {
    id: "heroine-room-night-day-5-seoin",
    background: "heroine_room_night",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "day-6-seoin-wake",
    advanceDayOnExit: true,
  },

  "day-6-seoin-wake": {
    id: "day-6-seoin-wake",
    background: "heroine_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "비가 그친 아침인데도, 어젯밤 선생님의 말이 아직 귓가에 남아 있어.",
    nextSceneId: "day-6-seoin-wake-question",
  },

  "day-6-seoin-wake-question": {
    id: "day-6-seoin-wake-question",
    background: "heroine_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "누군가를 좋아하는 건 위험한 일이라니... 왜 그런 말을 그렇게 아픈 얼굴로 했을까.",
    nextSceneId: "day-6-seoin-hallway",
  },

  "day-6-seoin-hallway": {
    id: "day-6-seoin-hallway",
    background: "sub_schoolzone_morning",
    speaker: "narrator",
    text: "신관 쪽 복도는 평소보다 더 조용했다. 어젯밤 비에 젖은 냄새가 아직 벽 틈에 남아 있는 것 같았다.",
    nextSceneId: "day-6-seoin-hallway-harin",
  },

  "day-6-seoin-hallway-harin": {
    id: "day-6-seoin-hallway-harin",
    background: "sub_schoolzone_morning",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "확인만 해보자. 그냥, 어제 본 게 뭔지 알고 싶은 것뿐이야.",
    nextSceneId: "day-6-seoin-theater-enter",
  },

  "day-6-seoin-theater-enter": {
    id: "day-6-seoin-theater-enter",
    background: "small_theater",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "여기... 다시 와도 이상해. 누가 계속 지켜보고 있는 것 같아.",
    nextSceneId: "day-6-seoin-photo-found",
  },

  "day-6-seoin-photo-found": {
    id: "day-6-seoin-photo-found",
    background: "small_theater",
    speaker: "narrator",
    text: "무대 뒤 낡은 상자 안에서 빛바랜 사진 한 장이 나왔다.",
    nextSceneId: "day-6-seoin-photo-cg",
  },

  "day-6-seoin-photo-cg": {
    id: "day-6-seoin-photo-cg",
    background: "seoin_event_6",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    nextSceneId: "day-6-seoin-photo-look",
  },

  "day-6-seoin-photo-look": {
    id: "day-6-seoin-photo-look",
    background: "seoin_event_6",
    speaker: "narrator",
    text: "사진 속에는 네 사람이 있었다. 무대 위에서 환하게 웃는 남학생 하나, 가운데 선 서인, 그리고 또다른 남학생.. 그리고 포스터 속 하린과 묘하게 닮은 여학생.",
    nextSceneId: "day-6-seoin-photo-harin",
  },

  "day-6-seoin-photo-harin": {
    id: "day-6-seoin-photo-harin",
    background: "seoin_event_6",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "이 여자애... 나랑 닮았어.",
    nextSceneId: "day-6-seoin-photo-harin-2",
  },

  "day-6-seoin-photo-harin-2": {
    id: "day-6-seoin-photo-harin-2",
    background: "seoin_event_6",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아니, 닮았다기보다... 이상하게 마음이 불편해.",
    nextSceneId: "day-6-seoin-article-found",
  },

  "day-6-seoin-article-found": {
    id: "day-6-seoin-article-found",
    background: "seoin_event_6",
    speaker: "narrator",
    text: "사진 뒤편에서 접힌 신문 스크랩이 떨어졌다.",
    nextSceneId: "day-6-seoin-article",
  },

  "day-6-seoin-article": {
    id: "day-6-seoin-article",
    background: "seoin_event_6",
    speaker: "narrator",
    text: "오래된 기사에는 공연 당일 벌어진 사고에 대한 짧은 문장들이 남아 있었다.",
    nextSceneId: "day-6-seoin-article-harin",
  },

  "day-6-seoin-article-harin": {
    id: "day-6-seoin-article-harin",
    background: "seoin_event_6",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "연극부 정기공연 당일, 학생 한 명 실종... 무대 장치 사고 가능성... 조사 중...",
    nextSceneId: "day-6-seoin-article-harin-2",
  },

  "day-6-seoin-article-harin-2": {
    id: "day-6-seoin-article-harin-2",
    background: "seoin_event_6",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "실종...?",
    nextSceneId: "day-6-seoin-appears",
  },

  "day-6-seoin-appears": {
    id: "day-6-seoin-appears",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "rage",
    text: "그걸 보면 안 됐어.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-harin-startled",
  },

  "day-6-seoin-harin-startled": {
    id: "day-6-seoin-harin-startled",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "서, 선생님...",
    nextSceneId: "day-6-seoin-ended",
  },

  "day-6-seoin-ended": {
    id: "day-6-seoin-ended",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "rage",
    text: "이미 오래전에 끝난 일이야.",
    nextSceneId: "day-6-seoin-harin-not-ended",
  },

  "day-6-seoin-harin-not-ended": {
    id: "day-6-seoin-harin-not-ended",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "끝난 일처럼 보이지 않아요. 선생님은 아직도 그날 안에 있는 것 같아요.",
    nextSceneId: "day-6-seoin-memory-1",
  },

  "day-6-seoin-memory-1": {
    id: "day-6-seoin-memory-1",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그 아이는... 늘 무대 위에서 빛났어.",
    nextSceneId: "day-6-seoin-memory-2",
  },

  "day-6-seoin-memory-2": {
    id: "day-6-seoin-memory-2",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "누구에게나 다정했고, 그래서 모두가 그 아이를 좋아했지.",
    nextSceneId: "day-6-seoin-memory-3",
  },

  "day-6-seoin-memory-3": {
    id: "day-6-seoin-memory-3",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "나도 그랬어. 아니... 나만 특별하다고 믿고 싶었어.",
    nextSceneId: "day-6-seoin-triangle-question",
  },

  "day-6-seoin-triangle-question": {
    id: "day-6-seoin-triangle-question",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그럼 사진 속 다른 학생도... 그 아이를 좋아했던 거예요?",
    nextSceneId: "day-6-seoin-triangle-1",
  },

  "day-6-seoin-triangle-1": {
    id: "day-6-seoin-triangle-1",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "좋아한다는 말로는 부족했지.",
    nextSceneId: "day-6-seoin-triangle-2",
  },

  "day-6-seoin-triangle-2": {
    id: "day-6-seoin-triangle-2",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그 감정은 점점 무대 밖까지 번졌고, 대본보다 더 잔인하게 우리를 움직였어.",
    nextSceneId: "day-6-seoin-accident-1",
  },

  "day-6-seoin-accident-1": {
    id: "day-6-seoin-accident-1",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "공연 전날, 우리는 크게 다퉜어.",
    nextSceneId: "day-6-seoin-accident-2",
  },

  "day-6-seoin-accident-2": {
    id: "day-6-seoin-accident-2",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "누가 더 그 아이를 이해하는지, 누가 더 곁에 있어야 하는지... 지금 생각하면 전부 어리석었는데.",
    nextSceneId: "day-6-seoin-accident-3",
  },

  "day-6-seoin-accident-3": {
    id: "day-6-seoin-accident-3",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그날 무대 장치가 무너졌고, 그 아이는 돌아오지 못했어.",
    nextSceneId: "day-6-seoin-guilt-harin",
  },

  "day-6-seoin-guilt-harin": {
    id: "day-6-seoin-guilt-harin",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선생님 잘못이 아니잖아요.",
    nextSceneId: "day-6-seoin-guilt-1",
  },

  "day-6-seoin-guilt-1": {
    id: "day-6-seoin-guilt-1",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "내가 붙잡지 않았다면.",
    nextSceneId: "day-6-seoin-guilt-2",
  },

  "day-6-seoin-guilt-2": {
    id: "day-6-seoin-guilt-2",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "내가 그날 좋아한다고 말하지 않았다면.",
    nextSceneId: "day-6-seoin-guilt-3",
  },

  "day-6-seoin-guilt-3": {
    id: "day-6-seoin-guilt-3",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "내 감정이 그 아이를 무대 위로 밀어 넣은 거야.",
    nextSceneId: "day-6-seoin-harin-understands",
  },

  "day-6-seoin-harin-understands": {
    id: "day-6-seoin-harin-understands",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "좋아하는 마음이 누군가를 다치게 할 수도 있다는 말... 그래서였군요.",
    nextSceneId: "day-6-seoin-love-danger-1",
  },

  "day-6-seoin-love-danger-1": {
    id: "day-6-seoin-love-danger-1",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그래서 위험한 거야.",
    nextSceneId: "day-6-seoin-love-danger-2",
  },

  "day-6-seoin-love-danger-2": {
    id: "day-6-seoin-love-danger-2",
    background: "seoin_event_7",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "사람은 사랑이라는 이름으로 너무 쉽게 자기 욕심을 숨겨.",
    nextSceneId: "day-6-seoin-truth-choice",
  },

  "day-6-seoin-truth-choice": {
    id: "day-6-seoin-truth-choice",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "나는 선생님에게 뭐라고 말해야 할까.",
    choices: [
      {
        text: "그건 사랑이 아니라 죄책감이에요.",
        nextSceneId: "day-6-seoin-choice-guilt",
        affection: { seoin: 5 },
      },
      {
        text: "그래도 선생님이 그 사람을 정말 아꼈다는 건 알 것 같아요.",
        nextSceneId: "day-6-seoin-choice-care",
        affection: { seoin: 10 },
      },
      {
        text: "저는... 선생님이 아직도 혼자 벌을 받고 있는 것 같아요.",
        nextSceneId: "day-6-seoin-choice-punish",
        affection: { seoin: 40 },
      },
    ],
  },

  "day-6-seoin-choice-guilt": {
    id: "day-6-seoin-choice-guilt",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그건 사랑이 아니라 죄책감이에요. 선생님이 계속 붙잡고 있는 건 그날의 마음이 아니라, 스스로를 벌주려는 마음 같아요.",
    nextSceneId: "day-6-seoin-salvation-guilt-start",
  },

  "day-6-seoin-choice-care": {
    id: "day-6-seoin-choice-care",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그래도 선생님이 그 사람을 정말 아꼈다는 건 알 것 같아요. 그래서 아직도 이렇게 아픈 거겠죠.",
    nextSceneId: "day-6-seoin-salvation-care-start",
  },

  "day-6-seoin-choice-punish": {
    id: "day-6-seoin-choice-punish",
    background: "seoin_event_7",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "저는... 선생님이 아직도 혼자 벌을 받고 있는 것 같아요.",
    nextSceneId: "day-6-seoin-salvation-start",
  },

  "day-6-seoin-salvation-guilt-start": {
    id: "day-6-seoin-salvation-guilt-start",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "죄책감...?",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-salvation-harin-1",
  },

  "day-6-seoin-salvation-care-start": {
    id: "day-6-seoin-salvation-care-start",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "아꼈다...?",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-salvation-care-harin",
  },

  "day-6-seoin-salvation-care-harin": {
    id: "day-6-seoin-salvation-care-harin",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "네. 선생님이 그 사람을 정말 소중히 여겼으니까, 지금도 이렇게 아픈 거라고 생각해요.",
    nextSceneId: "day-6-seoin-salvation-care-harin-2",
  },

  "day-6-seoin-salvation-care-harin-2": {
    id: "day-6-seoin-salvation-care-harin-2",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "하지만 그 마음이 선생님을 계속 그날에 묶어두는 건... 그 사람도 바라지 않았을 것 같아요.",
    nextSceneId: "day-6-seoin-salvation-seoin-1",
  },

  "day-6-seoin-salvation-start": {
    id: "day-6-seoin-salvation-start",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "벌...?",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-salvation-harin-1",
  },

  "day-6-seoin-salvation-harin-1": {
    id: "day-6-seoin-salvation-harin-1",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "네. 그 사람을 잊지 않으려고 하는 게 아니라, 선생님 자신을 계속 미워하려고 붙잡고 있는 것 같아요.",
    nextSceneId: "day-6-seoin-salvation-seoin-1",
  },

  "day-6-seoin-salvation-seoin-1": {
    id: "day-6-seoin-salvation-seoin-1",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "나는... 잊으면 안 된다고 생각했어.",
    nextSceneId: "day-6-seoin-salvation-seoin-2",
  },

  "day-6-seoin-salvation-seoin-2": {
    id: "day-6-seoin-salvation-seoin-2",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "내가 편해지는 순간, 그 아이를 두 번 버리는 것 같아서.",
    nextSceneId: "day-6-seoin-salvation-harin-2",
  },

  "day-6-seoin-salvation-harin-2": {
    id: "day-6-seoin-salvation-harin-2",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "잊는 거랑, 용서받는 건 다른 것 같아요.",
    nextSceneId: "day-6-seoin-salvation-harin-3",
  },

  "day-6-seoin-salvation-harin-3": {
    id: "day-6-seoin-salvation-harin-3",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선생님이 계속 아파한다고 해서 그 사람이 돌아오는 건 아니잖아요.",
    nextSceneId: "day-6-seoin-salvation-seoin-stop",
  },

  "day-6-seoin-salvation-seoin-stop": {
    id: "day-6-seoin-salvation-seoin-stop",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "rage",
    text: "그만해.",
    nextSceneId: "day-6-seoin-salvation-harin-4",
  },

  "day-6-seoin-salvation-harin-4": {
    id: "day-6-seoin-salvation-harin-4",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "싫어요. 선생님이 아직도 그 무대 위에 혼자 서 있는 것 같아서요.",
    nextSceneId: "day-6-seoin-salvation-seoin-alone",
  },

  "day-6-seoin-salvation-seoin-alone": {
    id: "day-6-seoin-salvation-seoin-alone",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "...혼자.",
    nextSceneId: "day-6-seoin-salvation-crack",
  },

  "day-6-seoin-salvation-crack": {
    id: "day-6-seoin-salvation-crack",
    background: "seoin_event_7_1",
    speaker: "narrator",
    text: "서인 선생님의 표정이 무너졌다. 오랫동안 단단히 잠겨 있던 문이, 아주 작은 소리를 내며 열리는 것 같았다.",
    nextSceneId: "day-6-seoin-salvation-seoin-confess-1",
  },

  "day-6-seoin-salvation-seoin-confess-1": {
    id: "day-6-seoin-salvation-seoin-confess-1",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "나는 그 아이를 사랑했다고 믿었어.",
    nextSceneId: "day-6-seoin-salvation-seoin-confess-2",
  },

  "day-6-seoin-salvation-seoin-confess-2": {
    id: "day-6-seoin-salvation-seoin-confess-2",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그런데 사실은... 내가 사랑받고 싶었던 건지도 몰라.",
    nextSceneId: "day-6-seoin-salvation-seoin-confess-3",
  },

  "day-6-seoin-salvation-seoin-confess-3": {
    id: "day-6-seoin-salvation-seoin-confess-3",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "그 마음을 인정하는 게 너무 무서워서, 전부 죄로 만들어버렸어.",
    nextSceneId: "day-6-seoin-salvation-harin-call",
  },

  "day-6-seoin-salvation-harin-call": {
    id: "day-6-seoin-salvation-harin-call",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선생님.",
    nextSceneId: "day-6-seoin-salvation-seoin-cry",
  },

  "day-6-seoin-salvation-seoin-cry": {
    id: "day-6-seoin-salvation-seoin-cry",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "하린아... 나는 그날 이후로 한 번도 제대로 울지 못했어.",
    nextSceneId: "day-6-seoin-salvation-bow",
  },

  "day-6-seoin-salvation-bow": {
    id: "day-6-seoin-salvation-bow",
    background: "seoin_event_7_1",
    speaker: "narrator",
    text: "그 말 끝에, 서인 선생님은 처음으로 고개를 숙였다.",
    nextSceneId: "day-6-seoin-salvation-apology-1",
  },

  "day-6-seoin-salvation-apology-1": {
    id: "day-6-seoin-salvation-apology-1",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "미안해.",
    nextSceneId: "day-6-seoin-salvation-apology-harin",
  },

  "day-6-seoin-salvation-apology-harin": {
    id: "day-6-seoin-salvation-apology-harin",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "저한테요?",
    nextSceneId: "day-6-seoin-salvation-apology-2",
  },

  "day-6-seoin-salvation-apology-2": {
    id: "day-6-seoin-salvation-apology-2",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "너한테도. 그 아이한테도. 그리고... 나 자신한테도.",
    nextSceneId: "day-6-seoin-salvation-apology-3",
  },

  "day-6-seoin-salvation-apology-3": {
    id: "day-6-seoin-salvation-apology-3",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "나는 너무 오래, 과거를 지키는 척하면서 그 안에 숨어 있었어.",
    nextSceneId: "day-6-seoin-salvation-harin-out",
  },

  "day-6-seoin-salvation-harin-out": {
    id: "day-6-seoin-salvation-harin-out",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이제 나오면 돼요.",
    nextSceneId: "day-6-seoin-salvation-can-i",
  },

  "day-6-seoin-salvation-can-i": {
    id: "day-6-seoin-salvation-can-i",
    background: "seoin_event_7_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "dark",
    text: "...나와도 될까.",
    nextSceneId: "day-6-seoin-salvation-not-late",
  },

  "day-6-seoin-salvation-not-late": {
    id: "day-6-seoin-salvation-not-late",
    background: "seoin_event_7_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "네. 아직 늦지 않았어요.",
    nextSceneId: "day-6-seoin-salvation-cg",
  },

  "day-6-seoin-salvation-cg": {
    id: "day-6-seoin-salvation-cg",
    background: "seoin_event_8_1",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 3000,
    nextSceneId: "day-6-seoin-salvation-dawn",
  },

  "day-6-seoin-salvation-dawn": {
    id: "day-6-seoin-salvation-dawn",
    background: "seoin_event_8_1",
    speaker: "narrator",
    text: "서인은 무언가 깨달은듯 고개를 젖히고 내려오는 새벽 햇살을 느끼는듯 했다.",
    nextSceneId: "day-6-seoin-salvation-clear",
  },

  "day-6-seoin-salvation-clear": {
    id: "day-6-seoin-salvation-clear",
    background: "seoin_event_8_1",
    speaker: "narrator",
    text: "서인 선생님의 눈빛에서 오래된 어둠이 조금씩 걷히기 시작했다. 그리고 바닥에 놓인 안경을 보았다.",
    nextSceneId: "day-6-seoin-glasses-1",
  },

  "day-6-seoin-glasses-1": {
    id: "day-6-seoin-glasses-1",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "이 안경을 쓰면, 모든 게 선명해질 줄 알았어.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-glasses-2",
  },

  "day-6-seoin-glasses-2": {
    id: "day-6-seoin-glasses-2",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "그런데 정작 봐야 할 건 계속 외면하고 있었네.",
    nextSceneId: "day-6-seoin-glasses-harin",
  },

  "day-6-seoin-glasses-harin": {
    id: "day-6-seoin-glasses-harin",
    background: "seoin_event_8_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이제는 보여요?",
    nextSceneId: "day-6-seoin-glasses-3",
  },

  "day-6-seoin-glasses-3": {
    id: "day-6-seoin-glasses-3",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "응.",
    nextSceneId: "day-6-seoin-glasses-4",
  },

  "day-6-seoin-glasses-4": {
    id: "day-6-seoin-glasses-4",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "내가 잃어버린 것만 보고 살아온 게 아니라... 아직 남아 있는 것도 있었다는 걸.",
    nextSceneId: "day-6-seoin-glasses-thanks-1",
  },

  "day-6-seoin-glasses-thanks-1": {
    id: "day-6-seoin-glasses-thanks-1",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "하린아.",
    nextSceneId: "day-6-seoin-glasses-thanks-2",
  },

  "day-6-seoin-glasses-thanks-2": {
    id: "day-6-seoin-glasses-thanks-2",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "어두운 이 마음에서 날 꺼내줘서 고마워.",
    nextSceneId: "day-6-seoin-glasses-thanks-3",
  },

  "day-6-seoin-glasses-thanks-3": {
    id: "day-6-seoin-glasses-thanks-3",
    background: "seoin_event_8_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "네가 아니었다면, 나는 평생 그 무대에서 내려오지 못했을 거야.",
    nextSceneId: "day-6-seoin-hug-start",
  },

  "day-6-seoin-hug-start": {
    id: "day-6-seoin-hug-start",
    background: "seoin_event_8_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선생님...",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-hug-narrator",
  },

  "day-6-seoin-hug-narrator": {
    id: "day-6-seoin-hug-narrator",
    background: "seoin_event_8_3",
    speaker: "narrator",
    text: "하린이 조심스럽게 다가가자, 서인 선생님은 더 이상 물러서지 않았다.",
    nextSceneId: "day-6-seoin-hug-seoin-1",
  },

  "day-6-seoin-hug-seoin-1": {
    id: "day-6-seoin-hug-seoin-1",
    background: "seoin_event_8_3",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "이렇게 따뜻한데... 왜 나는 계속 혼자 추운 곳에 서 있었을까.",
    nextSceneId: "day-6-seoin-hug-harin",
  },

  "day-6-seoin-hug-harin": {
    id: "day-6-seoin-hug-harin",
    background: "seoin_event_8_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이제 혼자 서 있지 않아도 돼요.",
    nextSceneId: "day-6-seoin-hug-seoin-2",
  },

  "day-6-seoin-hug-seoin-2": {
    id: "day-6-seoin-hug-seoin-2",
    background: "seoin_event_8_3",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "응. 이제는... 나도 앞으로 걸어가 보고 싶어.",
    nextSceneId: "day-6-seoin-hug-ending-note-1",
  },

  "day-6-seoin-hug-ending-note-1": {
    id: "day-6-seoin-hug-ending-note-1",
    background: "seoin_event_8_3",
    speaker: "narrator",
    text: "낡은 소극장 안에 멈춰 있던 시간이 아주 천천히 움직이기 시작했다.",
    nextSceneId: "day-6-seoin-hug-ending-note-2",
  },

  "day-6-seoin-hug-ending-note-2": {
    id: "day-6-seoin-hug-ending-note-2",
    background: "seoin_event_8_3",
    speaker: "narrator",
    text: "그날의 무대는 실패로 끝났지만, 오늘의 무대 위에는 아직 끝나지 않은 이야기가 남아 있었다.",
    nextSceneId: "day-6-seoin-normal-ending-end",
    conditionalNextSceneIds: [
      {
        requiredSeenSceneId: "day-6-seoin-choice-punish",
        nextSceneId: "day-6-seoin-true-confession-harin",
      },
    ],
  },

  "day-6-seoin-normal-ending-end": {
    id: "day-6-seoin-normal-ending-end",
    background: "seoin_event_ending_end_1",
    speaker: "narrator",
    text: "",
    clickToContinue: true,
    nextSceneId: "ending-credits",
  },

  "day-6-seoin-true-confession-harin": {
    id: "day-6-seoin-true-confession-harin",
    background: "seoin_event_8",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선생님. 저는... 아마 선생님을 좋아하는 것 같아요.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-true-confession-seoin-1",
  },

  "day-6-seoin-true-confession-seoin-1": {
    id: "day-6-seoin-true-confession-seoin-1",
    background: "seoin_event_8",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "embarrassed",
    text: "하린아, 너는 아직 너무 어려.",
    nextSceneId: "day-6-seoin-true-confession-harin-2",
  },

  "day-6-seoin-true-confession-harin-2": {
    id: "day-6-seoin-true-confession-harin-2",
    background: "seoin_event_8",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "알아요. 그래서 지금 당장 대답해달라는 말은 아니에요.",
    nextSceneId: "day-6-seoin-true-confession-seoin-2",
  },

  "day-6-seoin-true-confession-seoin-2": {
    id: "day-6-seoin-true-confession-seoin-2",
    background: "seoin_event_8",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "happy",
    text: "네가 졸업하고, 스스로의 마음을 더 오래 바라본 뒤에도 같다면... 그때 다시 이야기하자.",
    nextSceneId: "day-6-seoin-true-promise-harin",
  },

  "day-6-seoin-true-promise-harin": {
    id: "day-6-seoin-true-promise-harin",
    background: "seoin_event_8",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그럼 약속해 주세요. 제가 진짜 어른이 되어서도 같은 마음이면, 그때는 도망가지 않겠다고.",
    nextSceneId: "day-6-seoin-true-promise-seoin",
  },

  "day-6-seoin-true-promise-seoin": {
    id: "day-6-seoin-true-promise-seoin",
    background: "seoin_event_8",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "약속할게. 그때의 너와, 그때의 나로 다시 만나자.",
    nextSceneId: "day-6-seoin-true-promise-narrator",
  },

  "day-6-seoin-true-promise-narrator": {
    id: "day-6-seoin-true-promise-narrator",
    background: "seoin_event_8",
    speaker: "narrator",
    text: "하린은 대답 대신 고개를 끄덕였다. 아직 이른 마음은, 오래 기다릴 약속이 되었다.",
    nextSceneId: "day-6-seoin-true-timeskip",
  },

  "day-6-seoin-true-timeskip": {
    id: "day-6-seoin-true-timeskip",
    background: "heroine_room",
    speaker: "narrator",
    text: "시간은 흘렀다. 하린은 우수한 성적으로 고등학교를 졸업하고 대기업으로 가기위한 준비를 했다.",
    nextSceneId: "day-6-seoin-true-timeskip-2",
  },

  "day-6-seoin-true-timeskip-2": {
    id: "day-6-seoin-true-timeskip-2",
    background: "heroine_room",
    speaker: "narrator",
    text: "하린은 대학을 졸업하고, 바쁘지만 단단한 어른의 하루를 살아가는 사람이 되었다.",
    nextSceneId: "day-6-seoin-true-timeskip-3",
  },

  "day-6-seoin-true-timeskip-3": {
    id: "day-6-seoin-true-timeskip-3",
    background: "heroine_room",
    speaker: "narrator",
    text: "아주 눈부신 미소를 지닌 사람으로..",
    nextSceneId: "day-6-seoin-true-return-theater",
  },

  "day-6-seoin-true-return-theater": {
    id: "day-6-seoin-true-return-theater",
    background: "seoin_event_ending_1",
    speaker: "narrator",
    text: "오랜 시간이 지나 다시 찾은 폐쇄된 소극장은, 더 이상 먼지와 어둠만 남은 곳이 아니었다.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-true-adult-harin",
  },

  "day-6-seoin-true-adult-harin": {
    id: "day-6-seoin-true-adult-harin",
    background: "seoin_event_ending_1",
    speaker: "heroine-grow",
    character: "heroine-grow",
    characterExpression: "default",
    text: "오래 기다리게 했죠.",
    nextSceneId: "day-6-seoin-true-adult-seoin-1",
  },

  "day-6-seoin-true-adult-seoin-1": {
    id: "day-6-seoin-true-adult-seoin-1",
    background: "seoin_event_ending_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "default",
    text: "기다린 게 아니야. 네가 네 삶을 살아오는 시간을 지켜본 거지.",
    nextSceneId: "day-6-seoin-true-adult-harin-2",
  },

  "day-6-seoin-true-adult-harin-2": {
    id: "day-6-seoin-true-adult-harin-2",
    background: "seoin_event_ending_1",
    speaker: "heroine-grow",
    character: "heroine-grow",
    characterExpression: "happy",
    text: "저는 아직도 같은 마음이에요. 아니, 그때보다 더 분명해졌어요.",
    nextSceneId: "day-6-seoin-true-adult-seoin-2",
  },

  "day-6-seoin-true-adult-seoin-2": {
    id: "day-6-seoin-true-adult-seoin-2",
    background: "seoin_event_ending_1",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "darkEmbarrassed",
    text: "나도 이제는 도망치지 않을게. 네가 내게 준 약속을, 오늘은 내가 지킬 차례야.",
    nextSceneId: "day-6-seoin-true-kiss-start",
  },

  "day-6-seoin-true-kiss-start": {
    id: "day-6-seoin-true-kiss-start",
    background: "seoin_event_ending_2",
    speaker: "narrator",
    text: "정리된 소극장 위로 따뜻한 빛이 내려앉았다. 오래 전 멈춰 있던 무대는 두 사람의 새로운 시작을 조용히 비추었다.",
    delayBeforeDialogue: 2000,
    nextSceneId: "day-6-seoin-true-kiss-seoin",
  },

  "day-6-seoin-true-kiss-seoin": {
    id: "day-6-seoin-true-kiss-seoin",
    background: "seoin_event_ending_2",
    speaker: "seoin",
    character: "seoin",
    characterExpression: "happy",
    text: "하린아, 나를 기다려줘서 고마워.",
    nextSceneId: "day-6-seoin-true-kiss-harin",
  },

  "day-6-seoin-true-kiss-harin": {
    id: "day-6-seoin-true-kiss-harin",
    background: "seoin_event_ending_2",
    speaker: "heroine-grow",
    character: "heroine-grow",
    characterExpression: "happy",
    text: "저도요. 선생님이 다시 앞으로 걸어와 줘서 고마워요.",
    nextSceneId: "day-6-seoin-true-ending-narrator",
  },

  "day-6-seoin-true-ending-narrator": {
    id: "day-6-seoin-true-ending-narrator",
    background: "seoin_event_ending_2",
    speaker: "narrator",
    text: "두 사람은 더 이상 과거의 무대에 갇혀 있지 않았다. 서로의 마음이 닿은 곳에서, 오래 기다린 막이 천천히 올랐다.",
    nextSceneId: "day-6-seoin-ending-end",
  },

  "day-6-seoin-ending-end": {
    id: "day-6-seoin-ending-end",
    background: "seoin_event_ending_end",
    speaker: "narrator",
    text: "",
    clickToContinue: true,
    nextSceneId: "ending-credits",
  },
};
