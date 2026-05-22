import type { Scene } from "../../types/game";

// 5일차: 연극제 준비와 이안/도하 고백 전 분기
export const day5Scenes: Record<string, Scene> = {
  "day-5-wake": {
    id: "day-5-wake",
    background: "heroine_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "벌써 아침이네... 오늘부터 연극제 준비가 본격적으로 시작되는 날이지.",
    nextSceneId: "day-5-festival-morning",
  },

  "day-5-festival-morning": {
    id: "day-5-festival-morning",
    background: "morning_street",
    speaker: "narrator",
    text: "학교로 향하는 길, 하린의 가방 안에는 구겨지지 않게 챙긴 대본이 들어 있었다.",
    nextSceneId: "day-5-clubroom-start",
    conditionalNextSceneIds: [
      {
        requiredSeenSceneId: "day-4-seoin-small-theater-seoin",
        nextSceneId: "day-5-seoin-clubroom-start",
      },
      {
        requiredSeenSceneId: "day-4-seoin-cold-look",
        nextSceneId: "day-5-seoin-clubroom-start",
      },
      {
        requiredSeenSceneId: "day-3-seoin-collision",
        nextSceneId: "day-5-seoin-clubroom-start",
      },
    ],
  },

  "day-5-clubroom-start": {
    id: "day-5-clubroom-start",
    background: "club-room",
    speaker: "narrator",
    text: "동아리방에는 하계 연극제 준비로 평소보다 분주한 공기가 감돌았다.",
    nextSceneId: "day-5-clubroom-doha-focus",
    conditionalNextSceneIds: [
      {
        higherAffectionThan: {
          first: "ian",
          second: "doha",
        },
        nextSceneId: "day-5-clubroom-ian-focus",
      },
    ],
  },

  "day-5-clubroom-ian-focus": {
    id: "day-5-clubroom-ian-focus",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "하린아, 오늘 대본 리딩은 내 옆에 앉아. 어려운 부분 있으면 바로 봐줄게.",
    nextSceneId: "day-5-clubroom-ian-harin",
  },

  "day-5-clubroom-ian-harin": {
    id: "day-5-clubroom-ian-harin",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배, 오늘따라 엄청 챙겨주시네요.",
    nextSceneId: "day-5-clubroom-ian-script-1",
  },

  "day-5-clubroom-ian-script-1": {
    id: "day-5-clubroom-ian-script-1",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "오늘따라라기보단, 전부터 계속 봐주고 있었어. 하린이는 긴장하면 대사 끝을 삼키더라.",
    nextSceneId: "day-5-clubroom-ian-harin-2",
  },

  "day-5-clubroom-ian-harin-2": {
    id: "day-5-clubroom-ian-harin-2",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그걸 다 보고 계셨어요?",
    nextSceneId: "day-5-clubroom-ian-script-2",
  },

  "day-5-clubroom-ian-script-2": {
    id: "day-5-clubroom-ian-script-2",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "전교 1등이라 관찰력이 좋은 걸로 해둘까? 사실은... 자꾸 눈이 가서.",
    nextSceneId: "day-5-clubroom-ian-harin-3",
  },

  "day-5-clubroom-ian-harin-3": {
    id: "day-5-clubroom-ian-harin-3",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네?",
    nextSceneId: "day-5-clubroom-ian-script-3",
  },

  "day-5-clubroom-ian-script-3": {
    id: "day-5-clubroom-ian-script-3",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "처음 2학년 교실 층에서 길 잃은 얼굴로 서 있던 것도, 공원에서 아이 풍선 보고 놀라던 것도.",
    nextSceneId: "day-5-clubroom-ian-script-4",
  },

  "day-5-clubroom-ian-script-4": {
    id: "day-5-clubroom-ian-script-4",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "발렌타인데이에 사람이 다 빠질 때까지 기다렸다가 초콜릿 건네주던 얼굴도. 이상하게 하나도 안 잊혀.",
    nextSceneId: "day-5-clubroom-ian-harin-4",
  },

  "day-5-clubroom-ian-harin-4": {
    id: "day-5-clubroom-ian-harin-4",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배, 그건 대본 리딩이랑 상관없는 얘기 같은데요...",
    nextSceneId: "day-5-clubroom-ian-script-5",
  },

  "day-5-clubroom-ian-script-5": {
    id: "day-5-clubroom-ian-script-5",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "맞아. 그래서 문제야. 대본을 봐야 하는데 자꾸 네 장면만 떠올라서.",
    nextSceneId: "day-5-clubroom-ian-script-6",
  },

  "day-5-clubroom-ian-script-6": {
    id: "day-5-clubroom-ian-script-6",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "나는 보통 답이 보이면 바로 말하는 편인데, 이번엔 이상하게 오래 고민했어. 틀리고 싶지 않아서.",
    nextSceneId: "day-5-clubroom-ian-harin-5",
  },

  "day-5-clubroom-ian-harin-5": {
    id: "day-5-clubroom-ian-harin-5",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이안 선배가요? 틀리는 걸 걱정해요?",
    nextSceneId: "day-5-clubroom-ian-script-7",
  },

  "day-5-clubroom-ian-script-7": {
    id: "day-5-clubroom-ian-script-7",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "응. 너한테 하는 말은 장난처럼 넘기고 싶지 않거든.",
    nextSceneId: "day-5-clubroom-ian-invite",
  },

  "day-5-clubroom-ian-invite": {
    id: "day-5-clubroom-ian-invite",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "방과후에 혹시 옥상으로 와줄래? 할 말이 있어.",
    nextSceneId: "day-5-after-school-ian-choice",
  },

  "day-5-after-school-ian-choice": {
    id: "day-5-after-school-ian-choice",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이안 선배가 옥상으로 와달라고 했는데...",
    choices: [
      {
        text: "이안이 말한 장소로 이동한다.",
        nextSceneId: "day-5-ian-confession-start",
      },
      {
        text: "다른 일이 있다고 연락하고 집으로 간다.",
        nextSceneId: "day-5-heroine-ending-start",
      },
    ],
  },

  "day-5-clubroom-doha-focus": {
    id: "day-5-clubroom-doha-focus",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "하린이, 오늘은 대본 같이 맞춰볼래? 네가 있으면 이상하게 장면이 더 잘 살아.",
    nextSceneId: "day-5-clubroom-doha-harin",
  },

  "day-5-clubroom-doha-harin": {
    id: "day-5-clubroom-doha-harin",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "정말요? 갑자기 그렇게 말하면... 괜히 마음이 들썩이는데요.",
    nextSceneId: "day-5-clubroom-doha-buildup-1",
  },

  "day-5-clubroom-doha-buildup-1": {
    id: "day-5-clubroom-doha-buildup-1",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "장난 아니야. 솔직히 말하면, 대본 맞추자고 부른 것도 핑계에 가깝기도 해.",
    nextSceneId: "day-5-clubroom-doha-buildup-2",
  },

  "day-5-clubroom-doha-buildup-2": {
    id: "day-5-clubroom-doha-buildup-2",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "핑계라니요... 그럼 도하선배는 왜 저를 부르신 거예요?",
    nextSceneId: "day-5-clubroom-doha-buildup-3",
  },

  "day-5-clubroom-doha-buildup-3": {
    id: "day-5-clubroom-doha-buildup-3",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "너랑 있으면 웃음이 먼저 나와. 연극도 잘 되고... 그게 좋아서, 자꾸 옆에 두고 싶었어.",
    nextSceneId: "day-5-clubroom-doha-buildup-4",
  },

  "day-5-clubroom-doha-buildup-4": {
    id: "day-5-clubroom-doha-buildup-4",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배... 그건 대본 연습 얘기인 거죠?",
    nextSceneId: "day-5-clubroom-doha-buildup-5",
  },

  "day-5-clubroom-doha-buildup-5": {
    id: "day-5-clubroom-doha-buildup-5",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "......응. 일단은. 근데 나중에 말할 것도 있어. 그전에 연습부터 하자. 아니면 내가 더 도망갈 것 같아서.",
    nextSceneId: "day-5-clubroom-doha-practice",
  },

  "day-5-clubroom-doha-practice": {
    id: "day-5-clubroom-doha-practice",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "부담 갖지 말고 즐겨. 자, 주인공들이 처음에 만나는 씬부터 다시 되짚어보자.",
    nextSceneId: "day-5-clubroom-doha-page",
  },

  "day-5-clubroom-doha-page": {
    id: "day-5-clubroom-doha-page",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "음. 6페이지였죠?",
    nextSceneId: "day-5-clubroom-doha-starts",
  },

  "day-5-clubroom-doha-starts": {
    id: "day-5-clubroom-doha-starts",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "맞아. 시작한다.",
    nextSceneId: "day-5-clubroom-doha-line-1",
  },

  "day-5-clubroom-doha-line-1": {
    id: "day-5-clubroom-doha-line-1",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "매번 햇살이 이렇게 따뜻한 날이면 넌 어김없이 나를 보며 환하게 웃었지.",
    nextSceneId: "day-5-clubroom-doha-confused-1",
  },

  "day-5-clubroom-doha-confused-1": {
    id: "day-5-clubroom-doha-confused-1",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "어..?",
    nextSceneId: "day-5-clubroom-doha-line-2",
  },

  "day-5-clubroom-doha-line-2": {
    id: "day-5-clubroom-doha-line-2",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "난 너의 미소로 감정이 벅차올라서 주체할 수 없게 되었어.",
    nextSceneId: "day-5-clubroom-doha-confused-2",
  },

  "day-5-clubroom-doha-confused-2": {
    id: "day-5-clubroom-doha-confused-2",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "(당황) 어? 그런 대사가 있었나?",
    nextSceneId: "day-5-clubroom-doha-invite",
  },

  "day-5-clubroom-doha-invite": {
    id: "day-5-clubroom-doha-invite",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "아까 대사... 대본이 아니었을 수도 있어. 그래서 말이야. 방과후에 공원으로 와줄래? 제대로 할 이야기가 있어.",
    nextSceneId: "day-5-clubroom-doha-exit",
  },

  "day-5-clubroom-doha-exit": {
    id: "day-5-clubroom-doha-exit",
    background: "club-room",
    speaker: "narrator",
    text: "그러고서는 도하는 자리에서 도망치듯 사라졌다.",
    nextSceneId: "day-5-clubroom-doha-harin-after",
  },

  "day-5-clubroom-doha-harin-after": {
    id: "day-5-clubroom-doha-harin-after",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "도하선배..",
    nextSceneId: "day-5-after-school-doha-choice",
  },

  "day-5-after-school-doha-choice": {
    id: "day-5-after-school-doha-choice",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "도하 선배가 공원으로 와달라 했는데...",
    choices: [
      {
        text: "도하가 말한 장소로 이동한다.",
        nextSceneId: "day-5-doha-confession-start",
      },
      {
        text: "다른 일이 있다고 연락하고 집으로 간다.",
        nextSceneId: "day-5-heroine-ending-start",
      },
    ],
  },
};
