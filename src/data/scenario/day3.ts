import type { Scene } from "../../types/game";

// 3일차: 대본 선택, 이안 도서관, 도하 운동장/양호실, 신관 추가 단서
export const day3Scenes: Record<string, Scene> = {
  "day-3-wake": {
    id: "day-3-wake",
    background: "heroine_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "뭔가 한것도 없는데 왜이렇게 일어나지 힘들지 ㅠ 힝",
    nextSceneId: "day-3-street",
  },

  "day-3-street": {
    id: "day-3-street",
    background: "morning_street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "오늘은 동아리 방에 잠깐 들를까? 아니면 바로 교실로 갈까?",
    nextSceneId: "day-3-script-choice",
  },

  "day-3-script-choice": {
    id: "day-3-script-choice",
    background: "morning_street",
    speaker: "narrator",
    text: "여름의 끝자락에 연극제가 열리는데 참가하는 하린은 대본이 필요하다.",
    choices: [
      {
        text: "교실 가기전에 연극동아리실로 먼저 간다.",
        nextSceneId: "day-3-club-room-script",
        nextSceneIdWhenAffectionEqual: "day-3-combi-argue-1",
        affectionEqualBetween: ["ian", "doha"],
      },
      {
        text: "아니다! 하교할때 들르자.",
        nextSceneId: "day-3-classroom",
      },
    ],
  },

  "day-3-club-room-script": {
    id: "day-3-club-room-script",
    background: "club-room",
    speaker: "narrator",
    text: "하린은 동아리실로 들어와 화이트보드 아래에 있는 대본을 집어들었다.",
    nextSceneId: "day-3-club-room-script-harin",
  },

  "day-3-club-room-script-harin": {
    id: "day-3-club-room-script-harin",
    background: "club-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "시간을 건너서..? 하계 연극제에서 과연 어떤 일이 일어날까?",
    nextSceneId: "day-3-classroom",
  },

  "day-3-combi-argue-1": {
    id: "day-3-combi-argue-1",
    background: "club-room",
    speaker: "narrator",
    speakerLabel: "?",
    text: "#4@#?@!! 이건 니 잘못이잖아!!",
    nextSceneId: "day-3-combi-argue-2",
  },

  "day-3-combi-argue-2": {
    id: "day-3-combi-argue-2",
    background: "club-room",
    speaker: "narrator",
    speakerLabel: "?",
    text: "뭐? 이 노란고무줄 같은 놈이 뭐라고?! 다시 말해봐!",
    nextSceneId: "day-3-combi-event-1-doha",
  },

  "day-3-combi-event-1-doha": {
    id: "day-3-combi-event-1-doha",
    background: "combi_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "노란고무줄! 그 애한테는 내가 먼저 고백하려 했어 니가 뭔데!",
    nextSceneId: "day-3-combi-event-1-ian",
  },

  "day-3-combi-event-1-ian": {
    id: "day-3-combi-event-1-ian",
    background: "combi_event_1",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "야! 내가 먼저 고백하려고 했어 포기해!",
    nextSceneId: "day-3-combi-event-1-harin",
  },

  "day-3-combi-event-1-harin": {
    id: "day-3-combi-event-1-harin",
    background: "combi_event_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "저저저저저저!!! 선배님은 잠시만요!! 왜 싸우시는거예요오 ㅠㅠㅠ",
    nextSceneId: "day-3-combi-doha-reaction",
  },

  "day-3-combi-doha-reaction": {
    id: "day-3-combi-doha-reaction",
    background: "combi_event_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "응?",
    nextSceneId: "day-3-combi-ian-reaction",
  },

  "day-3-combi-ian-reaction": {
    id: "day-3-combi-ian-reaction",
    background: "combi_event_1",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "응?",
    nextSceneId: "day-3-combi-event-2-ian",
  },

  "day-3-combi-event-2-ian": {
    id: "day-3-combi-event-2-ian",
    background: "combi_event_1_2",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "하린아 미안! 우리 하계 연극제 준비 하는거였어!",
    nextSceneId: "day-3-combi-event-2-doha",
  },

  "day-3-combi-event-2-doha": {
    id: "day-3-combi-event-2-doha",
    background: "combi_event_1_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "우리 연기력이 너무 출중해서 놀랐네",
    nextSceneId: "day-3-combi-event-2-script",
  },

  "day-3-combi-event-2-script": {
    id: "day-3-combi-event-2-script",
    background: "combi_event_1_2",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: '이번에 우리 연극 뭔지 봤지! "시간을 건너서" 너도 한번 봐봐 우리 이번에 이거 올릴거야',
    nextSceneId: "day-3-combi-event-2-timing",
  },

  "day-3-combi-event-2-timing": {
    id: "day-3-combi-event-2-timing",
    background: "combi_event_1_2",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "타이밍이 아주 좋게 들어왔네",
    nextSceneId: "day-3-combi-event-2-harin",
  },

  "day-3-combi-event-2-harin": {
    id: "day-3-combi-event-2-harin",
    background: "combi_event_1_2",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배님들 때문에 간 떨어질 뻔 했잖아요!!!!",
    nextSceneId: "day-3-combi-event-3-doha",
  },

  "day-3-combi-event-3-doha": {
    id: "day-3-combi-event-3-doha",
    background: "combi_event_1_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "푸핫",
    nextSceneId: "day-3-combi-event-3-ian",
  },

  "day-3-combi-event-3-ian": {
    id: "day-3-combi-event-3-ian",
    background: "combi_event_1_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "푸하하하하하!!!!",
    nextSceneId: "day-3-combi-event-3-narrator-1",
  },

  "day-3-combi-event-3-narrator-1": {
    id: "day-3-combi-event-3-narrator-1",
    background: "combi_event_1_3",
    speaker: "narrator",
    text: "두 사람은 뭔가 해냈다는듯이 서로 보며 웃었다.",
    nextSceneId: "day-3-combi-event-3-narrator-2",
  },

  "day-3-combi-event-3-narrator-2": {
    id: "day-3-combi-event-3-narrator-2",
    background: "combi_event_1_3",
    speaker: "narrator",
    text: "따뜻한 햇살이 창문으로 넘어온다. 지금 이순간 여기가 무대가 된것 같았다.",
    nextSceneId: "day-3-classroom",
  },

  "day-3-classroom": {
    id: "day-3-classroom",
    background: "class_room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "오늘은 수업들은 다 끝났고.. 이후는 뭐하지? 도서관에서 공부 좀 할까?",
    choices: [
      {
        text: "중간고사 대비 공부를 한다.",
        nextSceneId: "day-3-library-study-start",
      },
      {
        text: "집으로 간다.",
        nextSceneId: "day-3-go-home",
      },
      {
        text: "신관쪽으로 이동했다가 집으로 간다.",
        nextSceneId: "day-3-seoin-path-start",
        requiredSeenSceneId: "day-2-seoin-event-1",
      },
    ],
  },

  "day-3-library-study-start": {
    id: "day-3-library-study-start",
    background: "library",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "중간고사... 피할 수 없다면 정면승부다. 도서관 가서 조금만 공부하고 가자.",
    nextSceneId: "day-3-ian-library-narrator",
  },

  "day-3-ian-library-narrator": {
    id: "day-3-ian-library-narrator",
    background: "ian_event_3",
    speaker: "narrator",
    text: "도서관 가장 안쪽 자리. 조용한 책장 사이로 익숙한 목소리가 들렸다.",
    nextSceneId: "day-3-ian-library-teach",
  },

  "day-3-ian-library-teach": {
    id: "day-3-ian-library-teach",
    background: "ian_event_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "이 공식은 ...",
    nextSceneId: "day-3-ian-library-eyes",
  },

  "day-3-ian-library-eyes": {
    id: "day-3-ian-library-eyes",
    background: "ian_event_3",
    speaker: "narrator",
    text: "차분한 목소리로 공식을 읊던 선배는, 천천히 책에서 눈을 떼고 나를 바라보았다. 특유의 짙고 긴 속눈썹의 존재감을 가려주지 못하는 안경을 쓴 채로. ",
    nextSceneId: "day-3-ian-library-glasses",
  },

  "day-3-ian-library-glasses": {
    id: "day-3-ian-library-glasses",
    background: "ian_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배...? 안경 쓰셨네요?",
    nextSceneId: "day-3-ian-library-weird",
  },

  "day-3-ian-library-weird": {
    id: "day-3-ian-library-weird",
    background: "ian_event_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "아, 공부할 때만. 왜, 이상해?",
    nextSceneId: "day-3-ian-library-top-student",
  },

  "day-3-ian-library-top-student": {
    id: "day-3-ian-library-top-student",
    background: "ian_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "아니요. 뭔가... 전교 1등 느낌이 확 나서요.",
    nextSceneId: "day-3-ian-library-ten-minutes",
  },

  "day-3-ian-library-ten-minutes": {
    id: "day-3-ian-library-ten-minutes",
    background: "ian_event_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "드디어 내 진가를 알아보는구나. 좋아, 특별히 10분만 봐줄게.",
    nextSceneId: "day-3-ian-library-ten-minutes-harin",
  },

  "day-3-ian-library-ten-minutes-harin": {
    id: "day-3-ian-library-ten-minutes-harin",
    background: "ian_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "10분이요?",
    nextSceneId: "day-3-ian-library-one-hour",
  },

  "day-3-ian-library-one-hour": {
    id: "day-3-ian-library-one-hour",
    background: "ian_event_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "응. 근데 네가 못 알아들으면 30분, 그래도 안 되면 한 시간.",
    nextSceneId: "day-3-ian-library-keep-teaching",
  },

  "day-3-ian-library-keep-teaching": {
    id: "day-3-ian-library-keep-teaching",
    background: "ian_event_3",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그거 그냥 계속 가르쳐주겠다는 말 아닌가요?",
    nextSceneId: "day-3-ian-library-caught",
  },

  "day-3-ian-library-caught": {
    id: "day-3-ian-library-caught",
    background: "ian_event_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "들켰네.",
    nextSceneId: "day-3-return-home-ian",
  },

  "day-3-go-home": {
    id: "day-3-go-home",
    background: "Field",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "오늘은 그냥 빨리 집에 가서 쉬어야겠다...",
    nextSceneId: "day-3-doha-field-sound",
  },

  "day-3-doha-field-sound": {
    id: "day-3-doha-field-sound",
    background: "Field",
    speaker: "narrator",
    text: "하린은 정문으로 향하려다 분수대 쪽에서 들려오는 커다란 물소리에 발걸음을 멈췄다.",
    nextSceneId: "day-3-doha-field-alone",
  },

  "day-3-doha-field-alone": {
    id: "day-3-doha-field-alone",
    background: "doha_event_4",
    speaker: "narrator",
    text: "분수대 안쪽에 도하가 그대로 빠져 있었다.",
    nextSceneId: "day-3-doha-field-harin",
  },

  "day-3-doha-field-harin": {
    id: "day-3-doha-field-harin",
    background: "doha_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "도하선배!? 거기서 뭐 하세요!?",
    nextSceneId: "day-3-doha-field-doha",
  },

  "day-3-doha-field-doha": {
    id: "day-3-doha-field-doha",
    background: "doha_event_4",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "어, 하린이. 나도 내가 왜 여기 있는지 생각 중이야.",
    nextSceneId: "day-3-doha-field-way-home",
  },

  "day-3-doha-field-way-home": {
    id: "day-3-doha-field-way-home",
    background: "doha_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "생각은 나와서 하세요! 감기 걸리겠어요!",
    nextSceneId: "day-3-doha-field-practice",
  },

  "day-3-doha-field-practice": {
    id: "day-3-doha-field-practice",
    background: "doha_event_4",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "후배가 너무 침착하게 혼내니까 더 못 움직이겠는데.",
    nextSceneId: "day-3-doha-field-hand",
  },

  "day-3-doha-field-hand": {
    id: "day-3-doha-field-hand",
    background: "doha_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "장난칠 때가 아니잖아요! 어디 다친 데는 없어요?",
    nextSceneId: "day-3-doha-field-fine",
  },

  "day-3-doha-field-fine": {
    id: "day-3-doha-field-fine",
    background: "doha_event_4",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "괜찮아. 그냥 발이 미끄러졌어.",
    nextSceneId: "day-3-doha-field-hide",
  },

  "day-3-doha-field-hide": {
    id: "day-3-doha-field-hide",
    background: "doha_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "괜찮다는 사람치고 얼굴이 그렇게 창백하진 않거든요.",
    nextSceneId: "day-3-doha-field-sharp",
  },

  "day-3-doha-field-sharp": {
    id: "day-3-doha-field-sharp",
    background: "doha_event_4",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "...들켰네. 조금 추운 것 같긴 해.",
    nextSceneId: "day-3-doha-field-infirmary",
  },

  "day-3-doha-field-infirmary": {
    id: "day-3-doha-field-infirmary",
    background: "doha_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "그러니까 빨리 양호실 가요. 젖은 채로 있으면 진짜 큰일 나요.",
    nextSceneId: "day-3-doha-field-threat",
  },

  "day-3-doha-field-threat": {
    id: "day-3-doha-field-threat",
    background: "doha_event_4",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "걱정이야, 명령이야?",
    nextSceneId: "day-3-doha-field-worry",
  },

  "day-3-doha-field-worry": {
    id: "day-3-doha-field-worry",
    background: "doha_event_4",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "둘 다요.",
    nextSceneId: "day-3-doha-field-stay",
  },

  "day-3-doha-field-stay": {
    id: "day-3-doha-field-stay",
    background: "doha_event_4",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "알겠어. 대신 넘어질 것 같으면 잡아줘.",
    choices: [
      {
        text: "도하에게 손을 내밀어 부축한다.",
        nextSceneId: "day-3-doha-infirmary-quiet",
        affection: { doha: 10 },
      },
      {
        text: "양호실부터 가자고 단호하게 말한다.",
        nextSceneId: "day-3-doha-infirmary-firm",
        affection: { doha: 5 },
      },
    ],
  },

  "day-3-doha-infirmary-quiet": {
    id: "day-3-doha-infirmary-quiet",
    background: "school-yard",
    speaker: "narrator",
    text: "하린은 도하에게 손을 내밀었다. 물에 젖은 손끝이 차갑게 닿았다.",
    nextSceneId: "day-3-doha-infirmary-start",
  },

  "day-3-doha-infirmary-firm": {
    id: "day-3-doha-infirmary-firm",
    background: "school-yard",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "넘어질 것 같으면 제가 잡을 테니까, 일단 양호실부터 가요.",
    nextSceneId: "day-3-doha-infirmary-start",
  },

  "day-3-doha-infirmary-start": {
    id: "day-3-doha-infirmary-start",
    background: "nurses_office",
    speaker: "narrator",
    text: "양호실에는 희미한 소독약 냄새와 늦은 오후의 햇빛이 조용히 내려앉아 있었다.",
    nextSceneId: "day-3-doha-infirmary-bandage",
  },

  "day-3-doha-infirmary-bandage": {
    id: "day-3-doha-infirmary-bandage",
    background: "nurses_office",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "수건부터 덮어요. 그러다 진짜 감기 걸려요.",
    nextSceneId: "day-3-doha-infirmary-doha",
  },

  "day-3-doha-infirmary-doha": {
    id: "day-3-doha-infirmary-doha",
    background: "nurses_office",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "너 은근히 단호하다. 덕분에 살았네.",
    nextSceneId: "day-3-doha-infirmary-harin",
  },

  "day-3-doha-infirmary-harin": {
    id: "day-3-doha-infirmary-harin",
    background: "nurses_office",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "선배가 은근히 말을 안 들으니까요. 다음부터 분수대 근처에서는 조심하세요.",
    nextSceneId: "day-3-doha-infirmary-thanks",
  },

  "day-3-doha-infirmary-thanks": {
    id: "day-3-doha-infirmary-thanks",
    background: "nurses_office",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "응. 그래도... 네가 봐줘서 다행이다.",
    nextSceneId: "day-3-doha-infirmary-after",
  },

  "day-3-doha-infirmary-after": {
    id: "day-3-doha-infirmary-after",
    background: "nurses_office",
    speaker: "narrator",
    text: "하린은 도하가 마른 수건을 어깨에 두른 것을 확인하고서야 가방을 들었다.",
    nextSceneId: "day-3-doha-home",
  },

  "day-3-doha-home": {
    id: "day-3-doha-home",
    background: "evening-street",
    speaker: "narrator",
    text: "분수대의 물소리는 멀어졌지만, 집으로 향하는 발걸음은 이상하게 가벼웠다.",
    nextSceneId: "day-3-home-reflection-doha",
  },

  "day-3-return-home-ian": {
    id: "day-3-return-home-ian",
    background: "evening-street",
    speaker: "narrator",
    text: "해가 기울 무렵, 하린은 오늘 있었던 일을 곱씹으며 집으로 향했다.",
    nextSceneId: "day-3-home-reflection-ian",
  },

  "day-3-home-reflection-ian": {
    id: "day-3-home-reflection-ian",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "오늘 도서관에서 본 이안선배, 평소랑 조금 달라 보였지...",
    nextSceneId: "day-3-home-reflection-ian-2",
  },

  "day-3-home-reflection-ian-2": {
    id: "day-3-home-reflection-ian-2",
    background: "heroine-room",
    speaker: "narrator",
    text: "안경 너머로 차분하게 문제를 설명하던 목소리가, 잠들기 전까지도 이상하게 선명했다.",
    nextSceneId: "day-3-home-sleep",
  },

  "day-3-home-reflection-doha": {
    id: "day-3-home-reflection-doha",
    background: "heroine-room",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "도하선배는 괜찮다면서 왜 자꾸 걱정되게 하는 걸까...",
    nextSceneId: "day-3-home-reflection-doha-2",
  },

  "day-3-home-reflection-doha-2": {
    id: "day-3-home-reflection-doha-2",
    background: "heroine-room",
    speaker: "narrator",
    text: "분수대의 차가운 물소리와 양호실의 희미한 소독약 냄새가 하루의 끝에 조용히 남았다.",
    nextSceneId: "day-3-home-sleep",
  },

  "day-3-home-sleep": {
    id: "day-3-home-sleep",
    background: "heroine_room_night",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "내일은 또 무슨 일이 생기려나... 일단 오늘은 자자.",
    nextSceneId: "heroine-room-night-day-3",
  },

  "heroine-room-night-day-3": {
    id: "heroine-room-night-day-3",
    background: "heroine_room_night",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    backgroundFade: true,
    fadeInMs: 1200,
    fadeOutMs: 1200,
    nextSceneId: "day-4-wake",
    advanceDayOnExit: true,
  },
};
