import type { Scene } from "../../types/game";

// 4일차: 발렌타인데이와 일반 귀가 흐름
export const day4Scenes: Record<string, Scene> = {
  "day-4-wake": {
    id: "day-4-wake",
    background: "heroine_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "오늘이 발렌타인데이였지...? 그냥 넘어가면 괜히 하루종일 신경 쓰일 것 같은데.",
    nextSceneId: "day-4-park-chocolate-shop",
  },

  "day-4-park-chocolate-shop": {
    id: "day-4-park-chocolate-shop",
    background: "park",
    speaker: "narrator",
    text: "등굣길 공원 주변에는 발렌타인데이를 맞아 작은 초콜릿 매대가 줄지어 서 있었다.",
    nextSceneId: "day-4-park-chocolate-harin",
  },

  "day-4-park-chocolate-harin": {
    id: "day-4-park-chocolate-harin",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "너무 화려한 건 부담스럽고... 그래도 마음이 전해질 만한 걸로 골라볼까?",
    nextSceneId: "day-4-park-chocolate-bought",
  },

  "day-4-park-chocolate-bought": {
    id: "day-4-park-chocolate-bought",
    background: "park",
    speaker: "narrator",
    text: "하린은 한참을 망설이다가 작은 리본이 묶인 초콜릿 상자를 품에 안았다.",
    nextSceneId: "day-4-valentine-choice",
  },

  "day-4-valentine-choice": {
    id: "day-4-valentine-choice",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이 초콜릿... 누구한테 전하지?",
    choices: [
      {
        text: "이안에게 초콜릿을 준다.",
        nextSceneId: "day-4-ian-valentine-start",
        affection: { ian: 25 },
      },
      {
        text: "도하에게 초콜릿을 준다.",
        nextSceneId: "day-4-doha-valentine-start",
        affection: { doha: 25 },
      },
      {
        text: "에이... 내가 누구한테 이걸 줘...",
        nextSceneId: "day-4-seoin-path-start",
        requiredSeenSceneId: "day-2-seoin-event-1",
      },
    ],
  },

  "day-4-ian-valentine-start": {
    id: "day-4-ian-valentine-start",
    background: "ian_event_5",
    speaker: "narrator",
    text: "교실 앞 복도는 발렌타인데이 아침부터 유난히 소란스러웠다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-4-ian-valentine-girl-1",
  },

  "day-4-ian-valentine-girl-1": {
    id: "day-4-ian-valentine-girl-1",
    background: "ian_event_5",
    speaker: "narrator",
    speakerLabel: "여학생1",
    text: "이안 선배!! 이거 받아주세요!!! 밤새 직접 만든 거예요!!!",
    nextSceneId: "day-4-ian-valentine-girl-2",
  },

  "day-4-ian-valentine-girl-2": {
    id: "day-4-ian-valentine-girl-2",
    background: "ian_event_5",
    speaker: "narrator",
    speakerLabel: "여학생2",
    text: "선배 제 것도요! 수학 문제집보다 달콤할 거예요!!",
    nextSceneId: "day-4-ian-valentine-girl-3",
  },

  "day-4-ian-valentine-girl-3": {
    id: "day-4-ian-valentine-girl-3",
    background: "ian_event_5",
    speaker: "narrator",
    speakerLabel: "여학생3",
    text: "이안 선배 오늘도 너무 멋있어요!! 초콜릿 받아주세요!!",
    nextSceneId: "day-4-ian-valentine-girl-4",
  },

  "day-4-ian-valentine-girl-4": {
    id: "day-4-ian-valentine-girl-4",
    background: "ian_event_5",
    speaker: "narrator",
    speakerLabel: "여학생들",
    text: "선배!!! 여기 봐주세요!!! 저도요!!! 저 먼저요!!!",
    nextSceneId: "day-4-ian-valentine-harin-crowd",
  },

  "day-4-ian-valentine-harin-crowd": {
    id: "day-4-ian-valentine-harin-crowd",
    background: "ian_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "와... 저 틈에 들어가는 건 아무리 봐도 무리야.",
    nextSceneId: "day-4-ian-valentine-ian-crowd",
  },

  "day-4-ian-valentine-ian-crowd": {
    id: "day-4-ian-valentine-ian-crowd",
    background: "ian_event_5",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "고마워. 다들 이렇게 챙겨주니까 오늘은 공부하다 당 떨어질 일은 없겠네.",
    nextSceneId: "day-4-ian-valentine-harin-timing",
  },

  "day-4-ian-valentine-harin-timing": {
    id: "day-4-ian-valentine-harin-timing",
    background: "ian_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "지금 주면 완전 묻히겠지...? 나중에 사람이 좀 없어지면 전하자.",
    nextSceneId: "day-4-ian-valentine-empty-hall",
  },

  "day-4-ian-valentine-empty-hall": {
    id: "day-4-ian-valentine-empty-hall",
    background: "school-yard",
    speaker: "narrator",
    text: "수업이 끝난 뒤, 교실 복도에는 아침의 소란이 거짓말처럼 사라져 있었다.",
    nextSceneId: "day-4-ian-valentine-ian-alone",
  },

  "day-4-ian-valentine-ian-alone": {
    id: "day-4-ian-valentine-ian-alone",
    background: "school-yard",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "하린아. 아침부터 계속 뭔가 말하려던 얼굴이던데, 이제 말해줄래?",
    nextSceneId: "day-4-ian-valentine-harin",
  },

  "day-4-ian-valentine-harin": {
    id: "day-4-ian-valentine-harin",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배, 이거... 아침에는 사람이 너무 많아서 못 드렸어요. 발렌타인데이라서요.",
    nextSceneId: "day-4-ian-valentine-ian",
  },

  "day-4-ian-valentine-ian": {
    id: "day-4-ian-valentine-ian",
    background: "school-yard",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "일부러 기다렸다가 준 거야? 그러면 아침에 받은 것들보다 훨씬 특별한데.",
    nextSceneId: "day-4-ian-valentine-harin-2",
  },

  "day-4-ian-valentine-harin-2": {
    id: "day-4-ian-valentine-harin-2",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그, 그런 뜻까지는 아니고요! 그냥 타이밍이...",
    nextSceneId: "day-4-ian-valentine-ian-2",
  },

  "day-4-ian-valentine-ian-2": {
    id: "day-4-ian-valentine-ian-2",
    background: "school-yard",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "고마워, 하린아. 오늘 받은 것 중에 제일 오래 기억할게.",
    nextSceneId: "day-4-ian-valentine-end",
  },

  "day-4-ian-valentine-end": {
    id: "day-4-ian-valentine-end",
    background: "school-yard",
    speaker: "narrator",
    text: "이안은 초콜릿 상자를 가방 가장 안쪽에 조심스럽게 넣었다. 아침의 소란보다 조용한 그 순간이 하린의 마음에 더 오래 남았다.",
    conditionalNextSceneIds: [
      {
        nextSceneId: "day-4-ian-hidden-workshop-start",
        affectionGreaterThan: { character: "ian", value: 30 },
      },
    ],
    nextSceneId: "day-4-normal-return-home",
  },

  "day-4-ian-hidden-workshop-start": {
    id: "day-4-ian-hidden-workshop-start",
    background: "school-yard",
    speaker: "narrator",
    text: "방과후, 하린은 괜히 가방끈을 만지작거리며 복도를 걷다가 열린 실습실 쪽에서 금속이 부딪히는 소리를 들었다.",
    nextSceneId: "day-4-ian-hidden-workshop-found",
  },

  "day-4-ian-hidden-workshop-found": {
    id: "day-4-ian-hidden-workshop-found",
    background: "ian_event_4",
    speaker: "narrator",
    text: "실습실 안에는 이안이 있었다. 교복 소매를 걷어 올린 채, 자동차 부품을 하나하나 확인하고 있었다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-4-ian-hidden-workshop-harin-1",
  },

  "day-4-ian-hidden-workshop-harin-1": {
    id: "day-4-ian-hidden-workshop-harin-1",
    background: "ian_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이안 선배...? 아직 안 가셨어요?",
    nextSceneId: "day-4-ian-hidden-workshop-ian-1",
  },

  "day-4-ian-hidden-workshop-ian-1": {
    id: "day-4-ian-hidden-workshop-ian-1",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "어? 하린아. 동아리 친구가 부탁한 부품인데, 내일까지 맞춰야 해서 조금만 보고 가려고.",
    nextSceneId: "day-4-ian-hidden-workshop-harin-2",
  },

  "day-4-ian-hidden-workshop-harin-2": {
    id: "day-4-ian-hidden-workshop-harin-2",
    background: "ian_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배 이런 것도 하실 줄 알아요? 평소랑 좀 달라 보여서요.",
    nextSceneId: "day-4-ian-hidden-workshop-ian-2",
  },

  "day-4-ian-hidden-workshop-ian-2": {
    id: "day-4-ian-hidden-workshop-ian-2",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "잘한다기보단, 망가진 걸 그냥 두는 걸 별로 안 좋아해. 작은 나사 하나만 틀어져도 전체가 이상해지거든.",
    nextSceneId: "day-4-ian-hidden-workshop-narration-1",
  },

  "day-4-ian-hidden-workshop-narration-1": {
    id: "day-4-ian-hidden-workshop-narration-1",
    background: "ian_event_4",
    speaker: "narrator",
    text: "이안은 웃으면서 말했지만, 손끝은 한 번도 허투루 움직이지 않았다.",
    nextSceneId: "day-4-ian-hidden-workshop-ian-3",
  },

  "day-4-ian-hidden-workshop-ian-3": {
    id: "day-4-ian-hidden-workshop-ian-3",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "사람 마음도 비슷한 것 같아. 별거 아닌 척 넘긴 말 하나가 오래 남을 때가 있잖아.",
    nextSceneId: "day-4-ian-hidden-workshop-harin-3",
  },

  "day-4-ian-hidden-workshop-harin-3": {
    id: "day-4-ian-hidden-workshop-harin-3",
    background: "ian_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그 말... 왠지 선배답지 않게 너무 진지해요.",
    nextSceneId: "day-4-ian-hidden-workshop-ian-4",
  },

  "day-4-ian-hidden-workshop-ian-4": {
    id: "day-4-ian-hidden-workshop-ian-4",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "아침에 준 거, 고마웠어. 그냥이어도 좋고, 아니어도 좋아. 근데 나는 그냥으로 받진 않았어.",
    nextSceneId: "day-4-ian-hidden-workshop-harin-4",
  },

  "day-4-ian-hidden-workshop-harin-4": {
    id: "day-4-ian-hidden-workshop-harin-4",
    background: "ian_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배는 가끔 너무 치사해요. 아무렇지 않게 멋있는 말 하잖아요.",
    nextSceneId: "day-4-ian-hidden-workshop-ian-5",
  },

  "day-4-ian-hidden-workshop-ian-5": {
    id: "day-4-ian-hidden-workshop-ian-5",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "들켰네. 그럼 오늘은 방금까지만 기억해줘.",
    nextSceneId: "day-4-ian-hidden-workshop-narration-2",
  },

  "day-4-ian-hidden-workshop-narration-2": {
    id: "day-4-ian-hidden-workshop-narration-2",
    background: "ian_event_4",
    speaker: "narrator",
    text: "쇠 냄새와 기름 냄새 사이에서, 이안의 옆모습만 이상하게 선명했다.",
    nextSceneId: "day-4-ian-hidden-workshop-ian-6",
  },

  "day-4-ian-hidden-workshop-ian-6": {
    id: "day-4-ian-hidden-workshop-ian-6",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "나도 많이 틀리고, 많이 다시 해. 그래도 도망가진 않으려고 해. 내가 고치겠다고 마음먹은 건.",
    nextSceneId: "day-4-ian-hidden-workshop-ian-7",
  },

  "day-4-ian-hidden-workshop-ian-7": {
    id: "day-4-ian-hidden-workshop-ian-7",
    background: "ian_event_4",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "그리고 오늘 초콜릿은... 진짜 아까워서 못 먹겠다. 조금만 더 보고 먹을게. 나한테는 꽤 큰일이라서.",
    nextSceneId: "day-4-ian-hidden-home-reflect-1",
  },

  "day-4-ian-hidden-home-reflect-1": {
    id: "day-4-ian-hidden-home-reflect-1",
    background: "night_street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "이안 선배가 그렇게 집중하는 표정, 처음 봤어.",
    nextSceneId: "day-4-ian-hidden-home-reflect-2",
  },

  "day-4-ian-hidden-home-reflect-2": {
    id: "day-4-ian-hidden-home-reflect-2",
    background: "night_street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "늘 여유롭고 장난스러운 사람인 줄 알았는데... 망가진 걸 그냥 두지 못한다는 말이 계속 생각나.",
    nextSceneId: "day-4-ian-hidden-home-reflect-3",
  },

  "day-4-ian-hidden-home-reflect-3": {
    id: "day-4-ian-hidden-home-reflect-3",
    background: "night_street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "초콜릿 하나 준 것뿐인데, 오늘은 왠지 선배 마음의 아주 안쪽을 조금 본 것 같아.",
    nextSceneId: "day-4-normal-home-sleep",
  },

  "day-4-doha-valentine-start": {
    id: "day-4-doha-valentine-start",
    background: "doha_event_5",
    speaker: "narrator",
    text: "동아리방 앞에서 도하 선배가 학생들에게 둘러싸여 있었다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-4-doha-valentine-girl-1",
  },

  "day-4-doha-valentine-girl-1": {
    id: "day-4-doha-valentine-girl-1",
    background: "doha_event_5",
    speaker: "narrator",
    speakerLabel: "여학생1",
    text: "꺅!!!!!! 도하 선배!! 초콜릿 받아주세요!!!!",
    nextSceneId: "day-4-doha-valentine-girl-2",
  },

  "day-4-doha-valentine-girl-2": {
    id: "day-4-doha-valentine-girl-2",
    background: "doha_event_5",
    speaker: "narrator",
    speakerLabel: "여학생2",
    text: "도하 선배, 제 것도요! 이번 연극제 기대할게요!!",
    nextSceneId: "day-4-doha-valentine-boy-1",
  },

  "day-4-doha-valentine-boy-1": {
    id: "day-4-doha-valentine-boy-1",
    background: "doha_event_5",
    speaker: "narrator",
    speakerLabel: "남학생1",
    text: "결혼해주세요오오오오오오옥!!!!!!!!!!!!!",
    nextSceneId: "day-4-doha-valentine-girl-3",
  },

  "day-4-doha-valentine-girl-3": {
    id: "day-4-doha-valentine-girl-3",
    background: "doha_event_5",
    speaker: "narrator",
    speakerLabel: "여학생3",
    text: "도하 선배, 제 것도요!!",
    nextSceneId: "day-4-doha-valentine-harin-popular",
  },

  "day-4-doha-valentine-harin-popular": {
    id: "day-4-doha-valentine-harin-popular",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "와... 선배 진짜 인기가 많으시네... 하긴 저 얼굴에 인기가 없기도 힘들겠다.",
    nextSceneId: "day-4-doha-valentine-doha-call",
  },

  "day-4-doha-valentine-doha-call": {
    id: "day-4-doha-valentine-doha-call",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "어? 하린이 동아리방에 웬일이야?",
    nextSceneId: "day-4-doha-valentine-stare",
  },

  "day-4-doha-valentine-stare": {
    id: "day-4-doha-valentine-stare",
    background: "doha_event_5",
    speaker: "narrator",
    text: "도하 선배가 나를 부르는 순간 일제히 시선들이 꽂힌다.",
    nextSceneId: "day-4-doha-valentine-awkward",
  },

  "day-4-doha-valentine-awkward": {
    id: "day-4-doha-valentine-awkward",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아^^;; 도하 선배, 안...녕하세요. 동아리방에 뭐 좀 두고 와서요.",
    nextSceneId: "day-4-doha-valentine-bag",
  },

  "day-4-doha-valentine-bag": {
    id: "day-4-doha-valentine-bag",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "아 그래? 일단 후배들아 진정하고 내 가방에 다 넣어라.",
    nextSceneId: "day-4-doha-valentine-crowd-girl",
  },

  "day-4-doha-valentine-crowd-girl": {
    id: "day-4-doha-valentine-crowd-girl",
    background: "doha_event_5",
    speaker: "narrator",
    speakerLabel: "여학생들",
    text: "꺄아아아아아!!!!!",
    nextSceneId: "day-4-doha-valentine-crowd-boy",
  },

  "day-4-doha-valentine-crowd-boy": {
    id: "day-4-doha-valentine-crowd-boy",
    background: "doha_event_5",
    speaker: "narrator",
    speakerLabel: "남학생들",
    text: "우어어어어어!!!!!!!!",
    nextSceneId: "day-4-doha-valentine-harin",
  },

  "day-4-doha-valentine-harin": {
    id: "day-4-doha-valentine-harin",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "저 도하 선배!",
    nextSceneId: "day-4-doha-valentine-doha",
  },

  "day-4-doha-valentine-doha": {
    id: "day-4-doha-valentine-doha",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "너는 없어?",
    nextSceneId: "day-4-doha-valentine-harin-2",
  },

  "day-4-doha-valentine-harin-2": {
    id: "day-4-doha-valentine-harin-2",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네?",
    nextSceneId: "day-4-doha-valentine-doha-2",
  },

  "day-4-doha-valentine-doha-2": {
    id: "day-4-doha-valentine-doha-2",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "(본인의 가방에 가득한 초콜릿들을 손가락으로 가리킨다.)",
    nextSceneId: "day-4-doha-valentine-harin-3",
  },

  "day-4-doha-valentine-harin-3": {
    id: "day-4-doha-valentine-harin-3",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "에이... 당연히 선배 것도 준비해뒀죠.",
    nextSceneId: "day-4-doha-valentine-friendship",
  },

  "day-4-doha-valentine-friendship": {
    id: "day-4-doha-valentine-friendship",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "이거 그냥 우정 초콜릿이야?",
    nextSceneId: "day-4-doha-valentine-surprised",
  },

  "day-4-doha-valentine-surprised": {
    id: "day-4-doha-valentine-surprised",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네???",
    nextSceneId: "day-4-doha-valentine-meaning",
  },

  "day-4-doha-valentine-meaning": {
    id: "day-4-doha-valentine-meaning",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "조금 더 다른 의미로 줬으면 좋겠는데.",
    nextSceneId: "day-4-doha-valentine-blush",
  },

  "day-4-doha-valentine-blush": {
    id: "day-4-doha-valentine-blush",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "조..조금 더 애정을 담았어요오...",
    nextSceneId: "day-4-doha-valentine-thanks",
  },

  "day-4-doha-valentine-thanks": {
    id: "day-4-doha-valentine-thanks",
    background: "doha_event_5",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "고마워 하린아.",
    nextSceneId: "day-4-doha-valentine-harin-4",
  },

  "day-4-doha-valentine-harin-4": {
    id: "day-4-doha-valentine-harin-4",
    background: "doha_event_5",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "도하 선배 오늘따라 더더더더 상큼해 보여....",
    nextSceneId: "day-4-doha-valentine-end",
  },

  "day-4-doha-valentine-end": {
    id: "day-4-doha-valentine-end",
    background: "doha_event_5",
    speaker: "narrator",
    text: "도하는 초콜릿을 한 손에 꼭 쥔 채 작게 웃었다. 평소보다 낮은 목소리가 오래 귓가에 남았다.",
    nextSceneId: "day-4-normal-return-home",
  },

  "day-4-normal-return-home": {
    id: "day-4-normal-return-home",
    background: "evening-street",
    speaker: "narrator",
    text: "발렌타인데이의 들뜬 공기가 저녁 거리에도 희미하게 남아 있었다.",
    nextSceneId: "day-4-normal-home-sleep",
  },

  "day-4-normal-home-sleep": {
    id: "day-4-normal-home-sleep",
    background: "heroine_room_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "오늘은 심장이 너무 바빴어... 앞으로의 연극제 준비도 힘내보자.",
    nextSceneId: "heroine-room-night-day-4-normal",
  },

  "heroine-room-night-day-4-normal": {
    id: "heroine-room-night-day-4-normal",
    background: "heroine_room_night",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "day-5-wake",
    advanceDayOnExit: true,
  },

  "heroine-room-night-day-4": {
    id: "heroine-room-night-day-4",
    background: "heroine_room_night",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "day-5-wake",
    advanceDayOnExit: true,
  },
};
