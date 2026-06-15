import type { Scene } from "../../types/game";

// 1일차: 동아리 첫 만남과 이안/도하 첫 호감도 분기
export const day1Scenes: Record<string, Scene> = {
  "intro-rain": {
    id: "intro-rain",
    background: "title_1",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "intro",
  },

  intro: {
    id: "intro",
    background: "club-room",
    speaker: "narrator",
    text: "봄비가 그친 오후, 하린은 처음으로 연극 동아리방 문을 열었다.",
    choices: [
      {
        text: "먼저 이안에게 인사하러 간다",
        nextSceneId: "meet-ian",
      },
      {
        text: "도하에게 먼저 말을 건다",
        nextSceneId: "meet-doha",
      },
      {
        text: "교실로 먼저 이동한다",
        nextSceneId: "leave-club-for-class",
      },
    ],
  },

  "leave-club-for-class": {
    id: "leave-club-for-class",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배들, 저 수업 시작할 것 같아서 먼저 가볼게요!",
    nextSceneId: "classroom-hallway",
  },

  "meet-ian": {
    id: "meet-ian",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "어서 와. 신입 부원 맞지? 앉을 자리부터 찾아줄게.",
    nextSceneId: "meet-doha",
  },

  "meet-doha": {
    id: "meet-doha",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "잠깐, 내가 먼저 안내하려고 했는데. 하린, 창가 자리 좋아해?",
    choices: [
      {
        text: "이안에게 조용히 고맙다고 말한다",
        nextSceneId: "ian-plus",
        affection: { ian: 10 },
      },
      {
        text: "도하의 장난에 웃으며 대답한다",
        nextSceneId: "doha-plus",
        affection: { doha: 10 },
      },
    ],
  },

  "classroom-hallway": {
    id: "classroom-hallway",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "1학년 교실 층이 여기가 아닌것 같은데..?",
    nextSceneId: "ian-event-1",
  },

  "ian-event-1": {
    id: "ian-event-1",
    background: "ian_event_1",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "어? 하린이가 여긴 웬일이야? 교실을 잘못 찾았나본데 여긴 2학년 교실 층이라구.",
    delayBeforeDialogue: 3000,
    nextSceneId: "heroine-fluster",
  },

  "heroine-fluster": {
    id: "heroine-fluster",
    background: "ian_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네?? (당황) 교실을 진짜 잘못 찾은 거예요!!?",
    nextSceneId: "classroom-choice",
  },

  "classroom-choice": {
    id: "classroom-choice",
    background: "school-yard",
    speaker: "narrator",
    text: "이제 어떻게 할까?",
    choices: [
      {
        text: "이안에게 교실 찾아갈 수 있게 부탁한다.",
        nextSceneId: "ian-help",
        affection: { ian: 10 },
      },
      {
        text: "그냥 교실을 혼자 찾아나선다.",
        nextSceneId: "alone-classroom",
      },
    ],
  },

  "ian-help": {
    id: "ian-help",
    background: "school-yard",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "알겠어. 내가 데려다 줄게. 따라와.",
    nextSceneId: "ian-classroom",
  },

  "ian-classroom": {
    id: "ian-classroom",
    background: "class_room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "여기가 네 교실이야. 앞으로는 잊어버리면 나한테 물어봐. 내가 친.절.히 알려줄게",
    nextSceneId: "ian-classroom-harin",
  },

  "ian-classroom-harin": {
    id: "ian-classroom-harin",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "벌써부터 선배 친위대의 따가운 눈빛들이...",
    nextSceneId: "ian-classroom-reflect-1",
  },

  "alone-classroom": {
    id: "alone-classroom",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "알겠어요. 혼자서 찾아볼게요.",
    nextSceneId: "ian-classroom-reflect-1",
  },

  "ian-classroom-reflect-1": {
    id: "ian-classroom-reflect-1",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이안 선배는 장난스럽게 말하는데도 이상하게 안심이 되는 사람이네.",
    nextSceneId: "ian-classroom-reflect-2",
  },

  "ian-classroom-reflect-2": {
    id: "ian-classroom-reflect-2",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "첫날부터 2학년 교실 층에서 길을 잃다니... 그래도 혼자 헤매다 울상 되는 것보단 나았겠지?",
    nextSceneId: "alone-classroom-return",
  },

  "doha-classroom-reflect-1": {
    id: "doha-classroom-reflect-1",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "도하 선배, 그냥 장난만 치는 사람인 줄 알았는데 의외로 주변을 꽤 잘 보고 있었어.",
    nextSceneId: "doha-classroom-reflect-2",
  },

  "doha-classroom-reflect-2": {
    id: "doha-classroom-reflect-2",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "내 이름 옆에 적힌 메모도 그렇고... 무심하게 챙겨주는 말투가 괜히 더 신경 쓰이잖아.",
    nextSceneId: "doha-classroom-reflect-3",
  },

  "doha-classroom-reflect-3": {
    id: "doha-classroom-reflect-3",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "도하 선배가 말한 것처럼, 무대 위에서는 나도 끝까지 내 목소리를 내봐야지.",
    nextSceneId: "alone-classroom-return",
  },

  "alone-classroom-return": {
    id: "alone-classroom-return",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "앞으로의 학교생활 정말 흥미진진하다!",
    choices: [
      {
        text: "집으로 간다",
        nextSceneId: "heroine-room-day-end",
      },
    ],
  },

  "heroine-room-day-end": {
    id: "heroine-room-day-end",
    background: "heroine-room",
    speaker: "narrator",
    text: "하린은 피곤한 첫날을 보내고 방에 돌아왔다.",
    choices: [
      {
        text: "애정도 확인",
        nextSceneId: "show-affection",
      },
    ],
  },

  "show-affection": {
    id: "show-affection",
    background: "heroine-room",
    speaker: "narrator",
    text: "각 캐릭터와의 애정도를 확인했다.",
    choices: [
      {
        text: "오늘 하루 힘들었다 잠들어 볼까?",
        nextSceneId: "day-end",
      },
    ],
  },

  "day-end": {
    id: "day-end",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "내일은 어떤 일이 일어날까...",
    nextSceneId: "heroine-room-night",
  },

  "heroine-room-night": {
    id: "heroine-room-night",
    background: "heroine_room_night",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 3000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "day-2-wake",
    advanceDayOnExit: true,
  },

  "ian-plus": {
    id: "ian-plus",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "그렇게 말해주니까 다행이다. 앞으로 모르는 게 있으면 나한테 물어봐.",
    nextSceneId: "ian-bond",
  },

  "doha-plus": {
    id: "doha-plus",
    background: "club-room",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "좋아, 그럼 오늘부터 창가 자리는 우리 둘이 접수한 걸로.",
    nextSceneId: "doha-return-to-club-choice",
  },

  "doha-return-to-club-choice": {
    id: "doha-return-to-club-choice",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "어? 동아리방에 가방을 두고 왔어! 동아리방으로 되돌아갈까?",
    choices: [
      {
        text: "동아리방으로 되돌아간다",
        nextSceneId: "doha-event-1",
      },
      {
        text: "그냥 교실로 간다",
        nextSceneId: "classroom-hallway",
      },
    ],
  },

  "doha-event-1": {
    id: "doha-event-1",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "도하선배 대본보다가 잠들었네.. 깨워야하나...(고민)",
    delayBeforeDialogue: 3000,
    nextSceneId: "doha-event-choice",
  },

  "doha-event-choice": {
    id: "doha-event-choice",
    background: "doha_event_1",
    speaker: "narrator",
    text: "어떻게 할까?",
    choices: [
      {
        text: "도하선배를 깨운다",
        nextSceneId: "doha-event-2",
        affection: { doha: 5 },
      },
      {
        text: "그냥 조용조용 고양이 발걸음으로 동아리방을 나간다",
        nextSceneId: "doha-event-sneak-1",
        affection: { doha: 10 },
      },
    ],
  },

  "doha-event-2": {
    id: "doha-event-2",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "나 안잔다 윤이안....어?... 아, 하린이었구나.",
    delayBeforeDialogue: 3000,
    nextSceneId: "doha-event-2b",
  },

  "doha-event-2b": {
    id: "doha-event-2b",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "으악! 깨어 있었어요?! 죄송해요. 가방을 두고 와서요.",
    nextSceneId: "doha-event-2c",
  },

  "doha-event-2c": {
    id: "doha-event-2c",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "저기 의자 옆. 복도 쪽에 걸쳐져 있길래 누가 밟을까 봐 안쪽으로 밀어놨어.",
    nextSceneId: "doha-event-2d",
  },

  "doha-event-2d": {
    id: "doha-event-2d",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아... 감사합니다. 선배, 생각보다 되게 꼼꼼하시네요.",
    nextSceneId: "doha-event-2e",
  },

  "doha-event-2e": {
    id: "doha-event-2e",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "의외야? 그냥 햇빛 잘 드는 데서 웃고만 있을 것 같았어?",
    nextSceneId: "doha-event-2f",
  },

  "doha-event-2f": {
    id: "doha-event-2f",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아니요! 그, 그게 아니라... 조금은요.",
    nextSceneId: "doha-event-2g",
  },

  "doha-event-2g": {
    id: "doha-event-2g",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "하린이는 긴장하면 말끝이 사라지더라. 근데 눈은 안 피하던데. 그건 좋았어.",
    nextSceneId: "doha-event-2h",
  },

  "doha-event-2h": {
    id: "doha-event-2h",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배... 그런 것도 보고 계셨어요?",
    nextSceneId: "doha-event-2i",
  },

  "doha-event-2i": {
    id: "doha-event-2i",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "연극부 부단장이니까. 무대 위에서는 그런 사람이 오래 남아.",
    nextSceneId: "doha-event-2j",
  },

  "doha-event-2j": {
    id: "doha-event-2j",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아, 맞다. 선배 부단장이셨죠.",
    nextSceneId: "doha-event-2k",
  },

  "doha-event-2k": {
    id: "doha-event-2k",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "방금 까먹었지? 감점.",
    nextSceneId: "doha-event-2l",
  },

  "doha-event-2l": {
    id: "doha-event-2l",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "첫날부터요?!",
    nextSceneId: "doha-event-2m",
  },

  "doha-event-2m": {
    id: "doha-event-2m",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "농담이야. 가방 챙겼으면 가. 교실 늦겠다.",
    nextSceneId: "doha-event-2n",
  },

  "doha-event-2n": {
    id: "doha-event-2n",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "네. 선배도 너무 늦게까지 있지 마세요.",
    nextSceneId: "doha-event-2o",
  },

  "doha-event-2o": {
    id: "doha-event-2o",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "걱정해주는 거야?",
    nextSceneId: "doha-event-2p",
  },

  "doha-event-2p": {
    id: "doha-event-2p",
    background: "doha_event_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그냥... 감기 걸리시면 연극제 준비에 차질 생기니까요.",
    nextSceneId: "doha-event-2q",
  },

  "doha-event-2q": {
    id: "doha-event-2q",
    background: "doha_event_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "그럼 연극제 때문에라도 조심해야겠네.",
    nextSceneId: "doha-event-2r",
  },

  "doha-event-2r": {
    id: "doha-event-2r",
    background: "doha_event_2",
    speaker: "narrator",
    text: "도하는 다시 대본을 펼쳤다. 창가의 빛 아래에서, 그의 표정은 아까보다 조금 부드러워 보였다.",
    nextSceneId: "doha-event-retreat",
  },

  "doha-event-sneak-1": {
    id: "doha-event-sneak-1",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "실례합니다아... 저는 제 가방만 살짝...",
    nextSceneId: "doha-event-sneak-2",
  },

  "doha-event-sneak-2": {
    id: "doha-event-sneak-2",
    background: "doha_event_1",
    speaker: "narrator",
    text: "하린이 가방끈을 조심스럽게 잡아당기려던 순간, 바닥에 떨어져 있던 종이 한 장이 눈에 들어왔다.",
    nextSceneId: "doha-event-sneak-3",
  },

  "doha-event-sneak-3": {
    id: "doha-event-sneak-3",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이건... 신입부원들 이름? 내 이름 옆에 뭔가 적혀 있는데...",
    nextSceneId: "doha-event-sneak-4",
  },

  "doha-event-sneak-4": {
    id: "doha-event-sneak-4",
    background: "doha_event_1",
    speaker: "narrator",
    text: "종이에는 '발음 또렷함. 긴장하면 말끝 흐려짐. 무대 서면 꽤 잘할 타입.' 이라고 적혀 있었다.",
    nextSceneId: "doha-event-sneak-5",
  },

  "doha-event-sneak-5": {
    id: "doha-event-sneak-5",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "뭐야... 선배, 이런 것도 보고 있었어?",
    nextSceneId: "doha-event-sneak-6",
  },

  "doha-event-sneak-6": {
    id: "doha-event-sneak-6",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "보면 안 되는 거 봤네.",
    nextSceneId: "doha-event-sneak-7",
  },

  "doha-event-sneak-7": {
    id: "doha-event-sneak-7",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "으아악! 주무시는 거 아니었어요?!",
    nextSceneId: "doha-event-sneak-8",
  },

  "doha-event-sneak-8": {
    id: "doha-event-sneak-8",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "자고 있었는데, 누가 가방 도둑처럼 움직이길래.",
    nextSceneId: "doha-event-sneak-9",
  },

  "doha-event-sneak-9": {
    id: "doha-event-sneak-9",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "제 가방이거든요!",
    nextSceneId: "doha-event-sneak-10",
  },

  "doha-event-sneak-10": {
    id: "doha-event-sneak-10",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "알아. 그래서 안 잡았잖아.",
    nextSceneId: "doha-event-sneak-11",
  },

  "doha-event-sneak-11": {
    id: "doha-event-sneak-11",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "첫날부터 긴장 많이 한 것 같길래 적어둔 거야. 네가 못해서가 아니라, 네가 잘할 것 같아서.",
    nextSceneId: "doha-event-sneak-12",
  },

  "doha-event-sneak-12": {
    id: "doha-event-sneak-12",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그런 말을 왜 자는 척하다가 하세요...",
    nextSceneId: "doha-event-sneak-13",
  },

  "doha-event-sneak-13": {
    id: "doha-event-sneak-13",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "민망하잖아.",
    nextSceneId: "doha-event-sneak-14",
  },

  "doha-event-sneak-14": {
    id: "doha-event-sneak-14",
    background: "doha_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배도 민망한 걸 아세요?",
    nextSceneId: "doha-event-sneak-15",
  },

  "doha-event-sneak-15": {
    id: "doha-event-sneak-15",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "나도 사람인데?",
    nextSceneId: "doha-event-sneak-16",
  },

  "doha-event-sneak-16": {
    id: "doha-event-sneak-16",
    background: "doha_event_1",
    speaker: "narrator",
    text: "도하는 별일 아니라는 듯 대본을 덮었다. 하지만 하린의 이름이 적힌 종이만큼은 구겨지지 않게 책 사이에 끼워 넣었다.",
    nextSceneId: "doha-event-sneak-17",
  },

  "doha-event-sneak-17": {
    id: "doha-event-sneak-17",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "말끝 흐려지는 거, 꼭 단점은 아니야. 감정이 먼저 나오는 사람들은 원래 그래.",
    nextSceneId: "doha-event-sneak-18",
  },

  "doha-event-sneak-18": {
    id: "doha-event-sneak-18",
    background: "doha_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "대신 무대 위에서는 끝까지 말해. 네 목소리, 생각보다 잘 들리니까.",
    nextSceneId: "doha-event-sneak-19",
  },

  "doha-event-sneak-19": {
    id: "doha-event-sneak-19",
    background: "doha_event_1",
    speaker: "narrator",
    text: "무심하게 던진 말인데도 이상하게 오래 남았다.",
    nextSceneId: "doha-classroom-reflect-1",
  },

  "doha-event-retreat": {
    id: "doha-event-retreat",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "앗! 늦겠어!!! 얼른 다시 교실로 돌아가자!",
    nextSceneId: "doha-classroom-reflect-1",
  },

  "ian-bond": {
    id: "ian-bond",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "너랑 얘기하니까 편하네. 동아리 활동 끝나고 같이 책 볼래?",
    choices: [
      {
        text: "당연하죠 전교1등 수석에 빛나는 이안선배에게 물어봐야죠!",
        nextSceneId: "ian-bond-accept",
        affection: { ian: 10 },
      },
      {
        text: "조금 쑥스러워서 거절한다",
        nextSceneId: "ian-bond-reject",
      },
    ],
  },

  "ian-bond-accept": {
    id: "ian-bond-accept",
    background: "club-room",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "전교 1등인 게 1학년들한테도 소문이 나?...??",
    nextSceneId: "ian-school-store-hallway",
  },

  "ian-school-store-hallway": {
    id: "ian-school-store-hallway",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배들이랑 이야기 한다고 바짝 긴장하다보니 배가 고파졌어 ㅠㅠ 매점이나 들렀다가 교실로 가볼까?",
    nextSceneId: "ian-school-store-start",
  },

  "ian-school-store-start": {
    id: "ian-school-store-start",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "와... 여기가 말로만 듣던 매점 전쟁터구나.",
    nextSceneId: "ian-school-store-burger",
  },

  "ian-school-store-burger": {
    id: "ian-school-store-burger",
    background: "school_store",
    speaker: "narrator",
    text: "매점 앞에는 이미 학생들이 빵 코너를 둘러싸고 있었다.",
    nextSceneId: "ian-school-store-target",
  },

  "ian-school-store-target": {
    id: "ian-school-store-target",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "좋아. 김하린. 침착하자. 목표는 하나. 불갈비버거.",
    nextSceneId: "ian-school-store-strong",
  },

  "ian-school-store-strong": {
    id: "ian-school-store-strong",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "사람은 배가 고프면 강해진다... 그리고 나는 지금 꽤 강하다.",
    nextSceneId: "ian-school-store-last-one",
  },

  "ian-school-store-last-one": {
    id: "ian-school-store-last-one",
    background: "school_store",
    speaker: "narrator",
    speakerLabel: "여학생1",
    text: "불갈비버거 하나 남았대!",
    nextSceneId: "ian-school-store-awaken",
  },

  "ian-school-store-awaken": {
    id: "ian-school-store-awaken",
    background: "school_store",
    speaker: "narrator",
    text: "그 순간 하린의 눈빛이 달라졌다.",
    nextSceneId: "ian-school-store-charge",
  },

  "ian-school-store-charge": {
    id: "ian-school-store-charge",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "비켜라 잡것들아!!",
    nextSceneId: "ian-school-store-wind-1",
  },

  "ian-school-store-wind-1": {
    id: "ian-school-store-wind-1",
    background: "school_store",
    speaker: "narrator",
    speakerLabel: "남학생1",
    text: "어? 방금 1학년 엄청 빨랐는데?",
    nextSceneId: "ian-school-store-wind-2",
  },

  "ian-school-store-wind-2": {
    id: "ian-school-store-wind-2",
    background: "school_store",
    speaker: "narrator",
    speakerLabel: "여학생2",
    text: "누구야? 바람이었어?",
    nextSceneId: "ian-school-store-survive",
  },

  "ian-school-store-survive": {
    id: "ian-school-store-survive",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "죄송합니다! 지나갈게요! 생존이 걸렸어요!",
    nextSceneId: "ian-school-store-grab",
  },

  "ian-school-store-grab": {
    id: "ian-school-store-grab",
    background: "school_store",
    speaker: "narrator",
    text: "하린은 사람들 사이를 요리조리 빠져나가 마지막 불갈비버거를 집어 들었다.",
    nextSceneId: "ian-school-store-best",
  },

  "ian-school-store-best": {
    id: "ian-school-store-best",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "잡았다.",
    nextSceneId: "ian-school-store-family",
  },

  "ian-school-store-family": {
    id: "ian-school-store-family",
    background: "school_store",
    speaker: "narrator",
    text: "하린은 두 손으로 버거를 품에 안았다. 마치 오래 헤어진 가족을 다시 만난 사람처럼.",
    nextSceneId: "ian-school-store-burger-talk",
  },

  "ian-school-store-burger-talk": {
    id: "ian-school-store-burger-talk",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "헉헉 빨리 내 입으로..",
    nextSceneId: "ian-school-store-pay",
  },

  "ian-school-store-pay": {
    id: "ian-school-store-pay",
    background: "school_store",
    speaker: "narrator",
    speakerLabel: "매점 아주머니",
    text: "계산은 하고 감동해라.",
    nextSceneId: "ian-school-store-yes",
  },

  "ian-school-store-yes": {
    id: "ian-school-store-yes",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "넵.",
    nextSceneId: "ian-school-store-victory",
  },

  "ian-school-store-victory": {
    id: "ian-school-store-victory",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "후... 이겼다.",
    nextSceneId: "ian-school-store-trophy",
  },

  "ian-school-store-trophy": {
    id: "ian-school-store-trophy",
    background: "school_store",
    speaker: "narrator",
    text: "하린은 전리품처럼 불갈비버거를 들고 복도로 나왔다.",
    nextSceneId: "ian-school-store-place",
  },

  "ian-school-store-place": {
    id: "ian-school-store-place",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "근데 교실에서 먹으면 한입만 하는 놈들이 달려들 게 뻔한데... 어디 조용한 곳 없나?",
    nextSceneId: "ian-school-store-rooftop-idea",
  },

  "ian-school-store-rooftop-idea": {
    id: "ian-school-store-rooftop-idea",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "조용한 곳... 조용한 곳이 필요해.",
    nextSceneId: "ian-school-store-rooftop-wind",
  },

  "ian-school-store-rooftop-wind": {
    id: "ian-school-store-rooftop-wind",
    background: "school_store",
    speaker: "narrator",
    text: "하린은 문득 계단 위쪽에서 불어오는 바람을 느꼈다.",
    nextSceneId: "ian-school-store-run",
  },

  "ian-school-store-run": {
    id: "ian-school-store-run",
    background: "school_store",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "옥상? 잠깐만 먹고 내려오면 괜찮지 않을까? 그래. 이건 일탈이 아니라 식사 장소 탐색이야.",
    nextSceneId: "ian-rooftop-run",
  },

  "ian-rooftop-run": {
    id: "ian-rooftop-run",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "우와... 여기 좋다. 첫날부터 이런 아지트를 발견하다니, 김하린 제법인데?",
    nextSceneId: "ian-rooftop-dance",
  },

  "ian-rooftop-dance": {
    id: "ian-rooftop-dance",
    background: "morning_rooftop",
    speaker: "narrator",
    text: "하린은 주변을 살피고 조심스럽게 버거 포장을 열었다.",
    nextSceneId: "ian-rooftop-down",
  },

  "ian-rooftop-down": {
    id: "ian-rooftop-down",
    background: "ian_event_1_1",
    speaker: "heroine",
    text: "불갈비버거님. 만나서 반갑습니다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "ian-rooftop-found",
  },

  "ian-rooftop-found": {
    id: "ian-rooftop-found",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "버거한테 인사하는 후배는 처음 보는데.",
    nextSceneId: "ian-rooftop-event-start",
  },

  "ian-rooftop-event-start": {
    id: "ian-rooftop-event-start",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "꺄아아악! 이안 선배?! 언제부터 계셨어요?!",
    nextSceneId: "ian-rooftop-event-ian",
  },

  "ian-rooftop-event-ian": {
    id: "ian-rooftop-event-ian",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "“불갈비버거님” 정도부터?",
    nextSceneId: "ian-rooftop-event-harin",
  },

  "ian-rooftop-event-harin": {
    id: "ian-rooftop-event-harin",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "처음부터잖아요!!",
    nextSceneId: "ian-rooftop-heard",
  },

  "ian-rooftop-heard": {
    id: "ian-rooftop-heard",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "아니야. “김하린 제법인데?”는 못 들었어.",
    nextSceneId: "ian-rooftop-harin-caught",
  },

  "ian-rooftop-harin-caught": {
    id: "ian-rooftop-harin-caught",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "들었잖아요! 지금 들었다고 자백하셨잖아요!",
    nextSceneId: "ian-rooftop-ian-caught",
  },

  "ian-rooftop-ian-caught": {
    id: "ian-rooftop-ian-caught",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "아, 걸렸네.",
    nextSceneId: "ian-rooftop-harin-why",
  },

  "ian-rooftop-harin-why": {
    id: "ian-rooftop-harin-why",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배는 왜 옥상에 숨어 계세요?!",
    nextSceneId: "ian-rooftop-ian-wind",
  },

  "ian-rooftop-ian-wind": {
    id: "ian-rooftop-ian-wind",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "숨어 있던 건 아니고. 그냥 바람 쐬러 왔지.",
    nextSceneId: "ian-rooftop-ian-burger",
  },

  "ian-rooftop-ian-burger": {
    id: "ian-rooftop-ian-burger",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "근데 누가 버거를 너무 경건하게 모시고 올라오길래 방해하면 안 될 것 같아서.",
    nextSceneId: "ian-rooftop-harin-quiet",
  },

  "ian-rooftop-harin-quiet": {
    id: "ian-rooftop-harin-quiet",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그럼 계속 조용히 계셨어야죠...",
    nextSceneId: "ian-rooftop-ian-cant",
  },

  "ian-rooftop-ian-cant": {
    id: "ian-rooftop-ian-cant",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "미안. 버거한테 인사하는 건 못 참았어.",
    nextSceneId: "ian-rooftop-harin-forget",
  },

  "ian-rooftop-harin-forget": {
    id: "ian-rooftop-harin-forget",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "잊어주세요.",
    nextSceneId: "ian-rooftop-ian-try",
  },

  "ian-rooftop-ian-try": {
    id: "ian-rooftop-ian-try",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "노력은 해볼게.",
    nextSceneId: "ian-rooftop-harin-success",
  },

  "ian-rooftop-harin-success": {
    id: "ian-rooftop-harin-success",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "노력 말고 성공해주세요.",
    nextSceneId: "ian-rooftop-ian-hard",
  },

  "ian-rooftop-ian-hard": {
    id: "ian-rooftop-ian-hard",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "그건 어려운데.",
    nextSceneId: "ian-rooftop-image",
  },

  "ian-rooftop-image": {
    id: "ian-rooftop-image",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "하... 첫날부터 이미지 끝났다.",
    nextSceneId: "ian-rooftop-good",
  },

  "ian-rooftop-good": {
    id: "ian-rooftop-good",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "왜? 난 꽤 좋은데.",
    nextSceneId: "ian-rooftop-what",
  },

  "ian-rooftop-what": {
    id: "ian-rooftop-what",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "뭐가요?",
    nextSceneId: "ian-rooftop-honest",
  },

  "ian-rooftop-honest": {
    id: "ian-rooftop-honest",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "배고프면 솔직해지는 타입.",
    nextSceneId: "ian-rooftop-compliment",
  },

  "ian-rooftop-compliment": {
    id: "ian-rooftop-compliment",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그거 칭찬이에요?",
    nextSceneId: "ian-rooftop-ian-compliment",
  },

  "ian-rooftop-ian-compliment": {
    id: "ian-rooftop-ian-compliment",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "응. 적어도 눈치 보면서 굶는 것보단 훨씬 좋아.",
    nextSceneId: "ian-rooftop-cute",
  },

  "ian-rooftop-cute": {
    id: "ian-rooftop-cute",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "첫날엔 다들 잘 보이려고 힘주잖아. 근데 너는 버거 하나에 진심이라서 좀 웃겼고, 좀 편했어.",
    nextSceneId: "ian-rooftop-harin-not-funny",
  },

  "ian-rooftop-harin-not-funny": {
    id: "ian-rooftop-harin-not-funny",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배, 사람을 웃긴 후배로 기억하시면 곤란해요.",
    nextSceneId: "ian-rooftop-cute-joke",
  },

  "ian-rooftop-cute-joke": {
    id: "ian-rooftop-cute-joke",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "그럼 귀여운 후배?",
    nextSceneId: "ian-rooftop-harin-worse",
  },

  "ian-rooftop-harin-worse": {
    id: "ian-rooftop-harin-worse",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "더 곤란해요!",
    nextSceneId: "ian-rooftop-eat-well",
  },

  "ian-rooftop-eat-well": {
    id: "ian-rooftop-eat-well",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "알겠어. 그럼... 잘 먹는 후배.",
    nextSceneId: "ian-rooftop-accurate",
  },

  "ian-rooftop-accurate": {
    id: "ian-rooftop-accurate",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그건 왜 더 정확한데요.",
    nextSceneId: "ian-rooftop-top-student",
  },

  "ian-rooftop-top-student": {
    id: "ian-rooftop-top-student",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "정확한 건 중요하니까. 전교 1등이라.",
    nextSceneId: "ian-rooftop-annoying",
  },

  "ian-rooftop-annoying": {
    id: "ian-rooftop-annoying",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "또 그 얘기... 선배가 자기 입으로 말하면 조금 얄미워요.",
    nextSceneId: "ian-rooftop-sit",
  },

  "ian-rooftop-sit": {
    id: "ian-rooftop-sit",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "얄미운 선배가 버거 먹는 동안 옆에 있어도 돼?",
    nextSceneId: "ian-rooftop-no-steal",
  },

  "ian-rooftop-no-steal": {
    id: "ian-rooftop-no-steal",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "제 버거 뺏어먹지만 않으면요.",
    nextSceneId: "ian-rooftop-water",
  },

  "ian-rooftop-water": {
    id: "ian-rooftop-water",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "안 뺏어. 대신 물은 줄 수 있어.",
    nextSceneId: "ian-rooftop-water-harin",
  },

  "ian-rooftop-water-harin": {
    id: "ian-rooftop-water-harin",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "물...이요?",
    nextSceneId: "ian-rooftop-water-ian",
  },

  "ian-rooftop-water-ian": {
    id: "ian-rooftop-water-ian",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "매점에서 급하게 올라왔을 것 같아서. 천천히 먹어. 아무도 안 뺏어가.",
    nextSceneId: "ian-rooftop-water-thanks",
  },

  "ian-rooftop-water-thanks": {
    id: "ian-rooftop-water-thanks",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "...감사합니다. 방금 좀 다정했어요.",
    nextSceneId: "ian-rooftop-only-now",
  },

  "ian-rooftop-only-now": {
    id: "ian-rooftop-only-now",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "방금만?",
    nextSceneId: "ian-rooftop-only-now-harin",
  },

  "ian-rooftop-only-now-harin": {
    id: "ian-rooftop-only-now-harin",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "네. 방금만요.",
    nextSceneId: "ian-rooftop-strict",
  },

  "ian-rooftop-strict": {
    id: "ian-rooftop-strict",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "기준 엄격하네.",
    nextSceneId: "ian-rooftop-fair",
  },

  "ian-rooftop-fair": {
    id: "ian-rooftop-fair",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "제 버거 앞에서는 공정해야 해서요.",
    nextSceneId: "ian-rooftop-digest",
  },

  "ian-rooftop-digest": {
    id: "ian-rooftop-digest",
    background: "morning_rooftop",
    speaker: "narrator",
    text: "하린은 조용한 바람 속에서 버거를 한입 베어 물었다. 이상하게 아까까지의 긴장이 조금씩 풀렸다.",
    nextSceneId: "ian-rooftop-taste",
  },

  "ian-rooftop-taste": {
    id: "ian-rooftop-taste",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "어때? 옥상 맛집 인정?",
    nextSceneId: "ian-rooftop-secret",
  },

  "ian-rooftop-secret": {
    id: "ian-rooftop-secret",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "인정이요. 근데 비밀 장소로 하고 싶어요.",
    nextSceneId: "ian-rooftop-secret-ian",
  },

  "ian-rooftop-secret-ian": {
    id: "ian-rooftop-secret-ian",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "그럼 오늘부터 비밀 장소.",
    nextSceneId: "ian-rooftop-often",
  },

  "ian-rooftop-often": {
    id: "ian-rooftop-often",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배는 원래 이런 데 자주 와요?",
    nextSceneId: "ian-rooftop-often-ian",
  },

  "ian-rooftop-often-ian": {
    id: "ian-rooftop-often-ian",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "가끔. 사람이 너무 많으면 머릿속이 시끄러워져서.",
    nextSceneId: "ian-rooftop-human",
  },

  "ian-rooftop-human": {
    id: "ian-rooftop-human",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배도 그런 걸 느껴요? 항상 여유 있어 보여서요.",
    nextSceneId: "ian-rooftop-act",
  },

  "ian-rooftop-act": {
    id: "ian-rooftop-act",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "여유 있는 척을 잘하는 거지. 근데 지금은 진짜 좀 편하네.",
    nextSceneId: "ian-rooftop-why",
  },

  "ian-rooftop-why": {
    id: "ian-rooftop-why",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "왜요?",
    nextSceneId: "ian-rooftop-happy-eat",
  },

  "ian-rooftop-happy-eat": {
    id: "ian-rooftop-happy-eat",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "네가 너무 맛있게 먹어서. 누가 옆에서 그렇게 행복하게 먹으면, 괜히 나까지 쉬는 기분이 들거든.",
    nextSceneId: "ian-rooftop-dont-try",
  },

  "ian-rooftop-dont-try": {
    id: "ian-rooftop-dont-try",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "하린아. 첫날부터 너무 잘하려고 애쓰지 마.",
    nextSceneId: "ian-rooftop-burger-greet",
  },

  "ian-rooftop-burger-greet": {
    id: "ian-rooftop-burger-greet",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "버거한테 인사할 정도의 여유만 있으면 돼.",
    nextSceneId: "ian-rooftop-forever",
  },

  "ian-rooftop-forever": {
    id: "ian-rooftop-forever",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그거 평생 놀리실 거죠?",
    nextSceneId: "ian-rooftop-graduate",
  },

  "ian-rooftop-graduate": {
    id: "ian-rooftop-graduate",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "아니. 딱 졸업할 때까지만.",
    nextSceneId: "ian-rooftop-long",
  },

  "ian-rooftop-long": {
    id: "ian-rooftop-long",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "너무 길어요!",
    nextSceneId: "ian-rooftop-today-only",
  },

  "ian-rooftop-today-only": {
    id: "ian-rooftop-today-only",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "그럼 오늘 하루만. 대신 오늘은 기억해둘게. 네가 처음으로 덜 긴장한 얼굴.",
    nextSceneId: "ian-rooftop-casual",
  },

  "ian-rooftop-casual": {
    id: "ian-rooftop-casual",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배는 그런 말을 왜 아무렇지 않게 해요?",
    nextSceneId: "ian-rooftop-not-casual",
  },

  "ian-rooftop-not-casual": {
    id: "ian-rooftop-not-casual",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "아무렇지 않진 않은데.",
    nextSceneId: "ian-rooftop-harin-what",
  },

  "ian-rooftop-harin-what": {
    id: "ian-rooftop-harin-what",
    background: "morning_rooftop",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네?",
    nextSceneId: "ian-rooftop-go-down",
  },

  "ian-rooftop-go-down": {
    id: "ian-rooftop-go-down",
    background: "morning_rooftop",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "아니야. 다 먹었으면 내려가자. 교실 늦겠다.",
    nextSceneId: "ian-rooftop-reflect-classroom-1",
  },

  "ian-rooftop-reflect-classroom-1": {
    id: "ian-rooftop-reflect-classroom-1",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "이안 선배는 계속 장난치는 것 같은데, 이상하게 그 장난 때문에 긴장이 풀렸다.",
    nextSceneId: "ian-rooftop-reflect-classroom-2",
  },

  "ian-rooftop-reflect-classroom-2": {
    id: "ian-rooftop-reflect-classroom-2",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "천천히 먹으라고 물을 건네주던 얼굴이 자꾸 떠오른다. 그런 다정함은 반칙 아닌가...",
    nextSceneId: "ian-rooftop-digest-classroom",
  },

  "ian-rooftop-digest-classroom": {
    id: "ian-rooftop-digest-classroom",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "앞으로의 학교생활이 정말 기대된다!",
    nextSceneId: "ian-rooftop-digest-go-home",
  },

  "ian-rooftop-digest-go-home": {
    id: "ian-rooftop-digest-go-home",
    background: "class_room",
    speaker: "narrator",
    text: '슬슬 이제 집으로 가보자! 저녁에 "깨어나보니 내가 황후" 웹툰 정주행 하기로 했잖아!',
    choices: [
      {
        text: "집으로 간다",
        nextSceneId: "heroine-room-day-end",
      },
    ],
  },

  "ian-rooftop-apology": {
    id: "ian-rooftop-apology",
    background: "ian_event_1_1",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "저러다 다치겠네..으이그..",
    nextSceneId: "alone-classroom-return",
  },

  "ian-bond-reject": {
    id: "ian-bond-reject",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "으아아아! 죄송해요오! 저 먼저 교실로 가볼게요!",
    nextSceneId: "alone-classroom-return",
  },
};
