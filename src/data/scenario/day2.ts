import type { Scene } from "../../types/game";

// 2일차: 등굣길 선택, 이안 공원 루트, 도하 운동장 루트, 신관 첫 단서
export const day2Scenes: Record<string, Scene> = {
  "day-2-wake": {
    id: "day-2-wake",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "흐암! 벌써 시간이 이렇게?! 빨리 학교로 가자!",
    nextSceneId: "day-2-route-choice",
  },

  "day-2-route-choice": {
    id: "day-2-route-choice",
    background: "morning_street",
    speaker: "narrator",
    text: "아침에 학교를 가는 길, 어디로 갈까?",
    choices: [
      {
        text: "공원으로 간다",
        nextSceneId: "day-2-park-start",
      },
      {
        text: "학교 뒤편 운동장을 통해서 간다",
        nextSceneId: "day-2-playground-start",
      },
    ],
  },

  "day-2-park-start": {
    id: "day-2-park-start",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "오늘은 공원쪽으로 가보자!",
    nextSceneId: "day-2-park-child-1",
  },

  "day-2-park-child-1": {
    id: "day-2-park-child-1",
    background: "park",
    speaker: "narrator",
    speakerLabel: "아이",
    text: "으아앙 내 풍선!!!",
    nextSceneId: "day-2-park-harin-1",
  },

  "day-2-park-harin-1": {
    id: "day-2-park-harin-1",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "어? 무슨 일이지? 이게 무슨 소리야? 아이 울음 소리가?",
    nextSceneId: "day-2-park-unknown",
  },

  "day-2-park-unknown": {
    id: "day-2-park-unknown",
    background: "park",
    speaker: "narrator",
    speakerLabel: "?",
    text: "잠깐만 꼬마아가씨 이 멋진 오빠가 도와줄게",
    nextSceneId: "day-2-park-harin-2",
  },

  "day-2-park-harin-2": {
    id: "day-2-park-harin-2",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "어? 이 소리는?",
    nextSceneId: "day-2-ian-event-2",
  },

  "day-2-ian-event-2": {
    id: "day-2-ian-event-2",
    background: "ian_event_2",
    speaker: "narrator",
    speakerLabel: "아이",
    text: "와! 오빠 완전 멋있어! 조금만 더 옆으로!",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-2-ian-event-2b",
  },

  "day-2-ian-event-2b": {
    id: "day-2-ian-event-2b",
    background: "ian_event_2",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "(풍선을 손으로 낚아채며) 어때 완전 멋있지?",
    nextSceneId: "day-2-ian-event-2c",
  },

  "day-2-ian-event-2c": {
    id: "day-2-ian-event-2c",
    background: "ian_event_2",
    speaker: "narrator",
    speakerLabel: "아이",
    text: "오빠 너무 고마워! 히히",
    nextSceneId: "day-2-ian-event-2d",
  },

  "day-2-ian-event-2d": {
    id: "day-2-ian-event-2d",
    background: "ian_event_2",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "앞으로 이 끈 놓지말구 잘 잡구 다녀야해",
    nextSceneId: "day-2-ian-event-2e",
  },

  "day-2-ian-event-2e": {
    id: "day-2-ian-event-2e",
    background: "ian_event_2",
    speaker: "narrator",
    speakerLabel: "아이",
    text: "응 히히히!",
    nextSceneId: "day-2-ian-event-2f",
  },

  "day-2-ian-event-2f": {
    id: "day-2-ian-event-2f",
    background: "park",
    speaker: "narrator",
    text: "아이는 저 멀리 분수대쪽으로 뛰어갔다",
    nextSceneId: "day-2-ian-event-2g",
  },

  "day-2-ian-event-2g": {
    id: "day-2-ian-event-2g",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배 인기 많으신데요?",
    nextSceneId: "day-2-ian-event-2h",
  },

  "day-2-ian-event-2h": {
    id: "day-2-ian-event-2h",
    background: "park",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "후배님 또 내 멋진 활약상을 봤나보네 이왕 이렇게 된거 같이 학교갈래?",
    nextSceneId: "day-2-ian-event-2i",
  },

  "day-2-ian-event-2i": {
    id: "day-2-ian-event-2i",
    background: "park",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "그랬다가는 이안선배 친위대한테 끌려갈지도 몰라요^^..",
    nextSceneId: "day-2-ian-event-2j",
  },

  "day-2-ian-event-2j": {
    id: "day-2-ian-event-2j",
    background: "park",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "에이 뭐어때",
    nextSceneId: "day-2-ian-choice",
  },

  "day-2-ian-choice": {
    id: "day-2-ian-choice",
    background: "park",
    speaker: "narrator",
    text: "어떻게 할까?",
    choices: [
      {
        text: "이안에게 그래도 아까 아이 풍선 꺼내줄때 멋있었어요 하면서 엄지척을 한다",
        nextSceneId: "day-2-ian-thumb",
        affection: { ian: 20 },
      },
      {
        text: "뒤도 안돌아보고 도망간다",
        nextSceneId: "day-2-ian-run",
        affection: { ian: -10 },
      },
    ],
  },

  "day-2-ian-thumb": {
    id: "day-2-ian-thumb",
    background: "park",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "하하 귀여운 구석이 있네.",
    nextSceneId: "day-2-ian-reflect-1",
  },

  "day-2-ian-run": {
    id: "day-2-ian-run",
    background: "park",
    speaker: "narrator",
    text: "하린은 후폭풍이 두려워 일단 냅다 학교로 튀었다",
    nextSceneId: "day-2-ian-reflect-1",
  },

  "day-2-ian-reflect-1": {
    id: "day-2-ian-reflect-1",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아침부터 풍선 구출이라니... 이안 선배는 정말 어디서든 자연스럽게 사람들 눈에 띄는구나.",
    nextSceneId: "day-2-ian-reflect-2",
  },

  "day-2-ian-reflect-2": {
    id: "day-2-ian-reflect-2",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "장난스럽게 웃는 얼굴도 그렇고, 아이한테 끈 꼭 잡고 다니라고 말하던 목소리도 괜히 계속 생각나.",
    nextSceneId: "day-2-ian-reflect-3",
  },

  "day-2-ian-reflect-3": {
    id: "day-2-ian-reflect-3",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "오늘 하루도 조용히 지나가긴 글렀네.",
    nextSceneId: "day-2-classroom",
  },

  "day-2-playground-start": {
    id: "day-2-playground-start",
    background: "Field",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아놔 나 왜 이쪽으로 들어왔을까 ㅠㅠㅠ",
    nextSceneId: "day-2-soccer-1",
  },

  "day-2-soccer-1": {
    id: "day-2-soccer-1",
    background: "Field",
    speaker: "narrator",
    speakerLabel: "축구부1",
    text: "야! 거기 패스해!",
    nextSceneId: "day-2-soccer-2",
  },

  "day-2-soccer-2": {
    id: "day-2-soccer-2",
    background: "Field",
    speaker: "narrator",
    speakerLabel: "축구부2",
    text: "그쪽으로 차면 어떡해??????",
    nextSceneId: "day-2-soccer-narrator",
  },

  "day-2-soccer-narrator": {
    id: "day-2-soccer-narrator",
    background: "Field",
    speaker: "narrator",
    text: "갑자기 무서운 속도로 축구공이 하린이 쪽으로 날아가기 시작했다.",
    nextSceneId: "day-2-soccer-harin",
  },

  "day-2-soccer-harin": {
    id: "day-2-soccer-harin",
    background: "Field",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "꺄아악!!!!",
    nextSceneId: "day-2-doha-event-3",
  },

  "day-2-doha-event-3": {
    id: "day-2-doha-event-3",
    background: "doha_event_3",
    speaker: "narrator",
    text: "그때 갑자기 눈앞에 부드럽게 날리는 흑발이 보였다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-2-doha-event-3b",
  },

  "day-2-doha-event-3b": {
    id: "day-2-doha-event-3b",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "도! 도하선배!!!! 괜찮으세요!?",
    nextSceneId: "day-2-doha-event-3c",
  },

  "day-2-doha-event-3c": {
    id: "day-2-doha-event-3c",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "야! 똑바로 보고 차라고! 사람 다치잖아! 제대로 안해?",
    nextSceneId: "day-2-doha-event-3d",
  },

  "day-2-doha-event-3d": {
    id: "day-2-doha-event-3d",
    background: "doha_event_3",
    speaker: "narrator",
    speakerLabel: "축구부1",
    text: "윽...도하선배잖아",
    nextSceneId: "day-2-doha-event-3e",
  },

  "day-2-doha-event-3e": {
    id: "day-2-doha-event-3e",
    background: "doha_event_3",
    speaker: "narrator",
    speakerLabel: "축구부2",
    text: "도하선배 한테 혼났어!",
    nextSceneId: "day-2-doha-event-3f",
  },

  "day-2-doha-event-3f": {
    id: "day-2-doha-event-3f",
    background: "doha_event_3",
    speaker: "narrator",
    speakerLabel: "축구부3",
    text: "하앙(하트)",
    nextSceneId: "day-2-doha-event-3g",
  },

  "day-2-doha-event-3g": {
    id: "day-2-doha-event-3g",
    background: "doha_event_3",
    speaker: "narrator",
    speakerLabel: "축구부 주장",
    text: "선배 죄송합니다! 앞으로 이런 일 없도록 주의하겠습니다!!",
    nextSceneId: "day-2-doha-event-3h",
  },

  "day-2-doha-event-3h": {
    id: "day-2-doha-event-3h",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "어떻게 손으로 축구공을 잡아요? 초능력자예요?",
    nextSceneId: "day-2-doha-event-3i",
  },

  "day-2-doha-event-3i": {
    id: "day-2-doha-event-3i",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "내 반사신경이 대단한거지. 초능력자는 평가가 후한데?",
    nextSceneId: "day-2-doha-event-3j",
  },

  "day-2-doha-event-3j": {
    id: "day-2-doha-event-3j",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그래도 양호실 가봐야하는거 아니예요!?",
    nextSceneId: "day-2-doha-event-3k",
  },

  "day-2-doha-event-3k": {
    id: "day-2-doha-event-3k",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "아냐 이정돈 아무것도 아니야 (멀쩡한 손을 보여준다.)(안 멀쩡함.)",
    nextSceneId: "day-2-doha-choice",
  },

  "day-2-doha-choice": {
    id: "day-2-doha-choice",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "잠깐만요!",
    choices: [
      {
        text: "도하선배의 손에 있는 상처들을 손수건으로 감싸준다",
        nextSceneId: "day-2-doha-handkerchief",
        affection: { doha: 30 },
      },
      {
        text: "도하선배에게 고맙다고 이야기 한다",
        nextSceneId: "day-2-doha-thanks",
        affection: { doha: 5 },
      },
    ],
  },

  "day-2-doha-handkerchief": {
    id: "day-2-doha-handkerchief",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "안아픈 사람 마냥 그렇게 웃지 마요...",
    nextSceneId: "day-2-doha-handkerchief-doha-1",
  },

  "day-2-doha-handkerchief-doha-1": {
    id: "day-2-doha-handkerchief-doha-1",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "진짜 안아픈데..근데 또 누가 걱정해주니까 조금 아픈거 같기도..",
    nextSceneId: "day-2-doha-handkerchief-harin-1",
  },

  "day-2-doha-handkerchief-harin-1": {
    id: "day-2-doha-handkerchief-harin-1",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "네!?!",
    nextSceneId: "day-2-doha-handkerchief-doha-2",
  },

  "day-2-doha-handkerchief-doha-2": {
    id: "day-2-doha-handkerchief-doha-2",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "농담이야.",
    nextSceneId: "day-2-doha-handkerchief-bell",
  },

  "day-2-doha-handkerchief-bell": {
    id: "day-2-doha-handkerchief-bell",
    background: "doha_event_3",
    speaker: "narrator",
    text: "(수업 종 치는 소리)",
    nextSceneId: "day-2-doha-handkerchief-harin-2",
  },

  "day-2-doha-handkerchief-harin-2": {
    id: "day-2-doha-handkerchief-harin-2",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "저 먼저 가볼게요!!!!",
    nextSceneId: "day-2-doha-handkerchief-doha-3",
  },

  "day-2-doha-handkerchief-doha-3": {
    id: "day-2-doha-handkerchief-doha-3",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "(이런거 하나에 이렇게 고마워 하면 나중에 더 고마워할 일 생겼을 때는 어떻게 할거야 김하린?..)",
    nextSceneId: "day-2-doha-handkerchief-thanks",
  },

  "day-2-doha-handkerchief-thanks": {
    id: "day-2-doha-handkerchief-thanks",
    background: "doha_event_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "(흐뭇한 눈으로 손수건을 바라본다) 고마워 김하린.",
    nextSceneId: "day-2-doha-reflect-1",
  },

  "day-2-doha-thanks": {
    id: "day-2-doha-thanks",
    background: "doha_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "도하선배, 정말 고마워요!",
    nextSceneId: "day-2-doha-thanks-harin",
  },

  "day-2-doha-thanks-harin": {
    id: "day-2-doha-thanks-harin",
    background: "Field",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "으으... 다음부턴 운동장이 아니라 신관쪽 길로 들어가야겠어 아! 지금이라도 신관쪽으로 갈만한 길이 있는지 어디 확인해볼까?",
    nextSceneId: "day-2-doha-thanks-narrator-1",
  },

  "day-2-doha-thanks-narrator-1": {
    id: "day-2-doha-thanks-narrator-1",
    background: "Field",
    speaker: "narrator",
    text: "학교 운동장 왼쪽 뒷편으로 길이 나있다.",
    nextSceneId: "day-2-doha-thanks-narrator-2",
  },

  "day-2-doha-thanks-narrator-2": {
    id: "day-2-doha-thanks-narrator-2",
    background: "Field",
    speaker: "narrator",
    text: "근데 으스스하다. 사람들이 잘 다니지 않는가보다.",
    nextSceneId: "day-2-doha-thanks-narrator-3",
  },

  "day-2-doha-thanks-narrator-3": {
    id: "day-2-doha-thanks-narrator-3",
    background: "Field",
    speaker: "narrator",
    text: "어떡하지.",
    nextSceneId: "day-2-doha-path-choice",
  },

  "day-2-doha-path-choice": {
    id: "day-2-doha-path-choice",
    background: "Field",
    speaker: "narrator",
    text: "어떻게 할까?",
    choices: [
      {
        text: "신관쪽 길로 들어가본다",
        nextSceneId: "day-2-seoin-path-start",
      },
      {
        text: "들어가지 않고 교실로 간다",
        nextSceneId: "day-2-doha-reflect-1",
      },
    ],
  },

  "day-2-doha-reflect-1": {
    id: "day-2-doha-reflect-1",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "도하 선배가 축구공을 막아주던 순간, 진짜 시간이 잠깐 멈춘 것 같았어.",
    nextSceneId: "day-2-doha-reflect-2",
  },

  "day-2-doha-reflect-2": {
    id: "day-2-doha-reflect-2",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "아무렇지 않은 척 웃으면서도 사람 다칠 뻔한 일에는 확실히 화내는구나.",
    nextSceneId: "day-2-doha-reflect-3",
  },

  "day-2-doha-reflect-3": {
    id: "day-2-doha-reflect-3",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "무심한 듯한데 따뜻하고, 장난스러운데 든든하고... 도하 선배는 알수록 조금 신기한 사람 같아.",
    nextSceneId: "day-2-classroom",
  },

  "day-2-classroom": {
    id: "day-2-classroom",
    background: "class_room",
    speaker: "narrator",
    text: "둘째 날, 하린은 무사히 교실에 도착했다. 오늘도 학교생활이 시작된다.",
    choices: [
      {
        text: "하루를 마치고 집으로 간다",
        nextSceneId: "heroine-room-day-2-end",
      },
    ],
  },

  "heroine-room-day-2-end": {
    id: "heroine-room-day-2-end",
    background: "heroine-room",
    speaker: "narrator",
    text: "둘째 날을 마치고 하린은 방으로 돌아왔다.",
    choices: [
      {
        text: "애정도 확인",
        nextSceneId: "show-affection-day-2",
      },
    ],
  },

  "show-affection-day-2": {
    id: "show-affection-day-2",
    background: "heroine-room",
    speaker: "narrator",
    text: "오늘 하루 있었 일을 떠올리며 애정도를 확인했다.",
    choices: [
      {
        text: "오늘도 힘들었다 잠들어 볼까?",
        nextSceneId: "day-end-day-2",
      },
    ],
  },

  "day-end-day-2": {
    id: "day-end-day-2",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "내일은 또 어떤 일이 기다리고 있을까...",
    nextSceneId: "heroine-room-night-day-2",
  },

  "heroine-room-night-day-2": {
    id: "heroine-room-night-day-2",
    background: "heroine_room_night",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "day-3-wake",
    advanceDayOnExit: true,
  },
};
