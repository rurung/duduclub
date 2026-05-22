import type { Scene } from "../../types/game";

// 엔딩: 독립 엔딩, 이안/도하 고백 엔딩, 크레딧
export const endingScenes: Record<string, Scene> = {
  "day-5-heroine-ending-start": {
    id: "day-5-heroine-ending-start",
    background: "evening-street",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "happy",
    text: "앞으로 연극제 잘 준비해보자! 내 인생은 내가 잘 만들어가는거니까!",
    nextSceneId: "day-5-heroine-ending-cg",
  },

  "day-5-heroine-ending-cg": {
    id: "day-5-heroine-ending-cg",
    background: "heroine_ending",
    speaker: "narrator",
    text: "하린은 저녁빛 속에서 작게 웃었다. 누군가의 마음도 소중하지만, 스스로의 내일을 선택하는 마음 역시 반짝이고 있었다.",
    nextSceneId: "ending-credits",
  },

  "day-5-ian-confession-start": {
    id: "day-5-ian-confession-start",
    background: "ian_event_6",
    speaker: "narrator",
    text: "옥상 문을 열자 바람이 먼저 하린을 맞았다. 이안은 난간 옆에서 오래 기다린 사람처럼 조용히 서 있었다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-5-ian-confession-ian-1",
  },

  "day-5-ian-confession-ian-1": {
    id: "day-5-ian-confession-ian-1",
    background: "ian_event_6",
    speaker: "ian",
    character: "ian",
    characterExpression: "default",
    text: "처음엔 그냥 재미있는 후배라고 생각했어. 교실을 잘못 찾아온 것도, 갑자기 매점 햄버거 얘기를 하던 것도.",
    nextSceneId: "day-5-ian-confession-ian-2-cg",
  },

  "day-5-ian-confession-ian-2-cg": {
    id: "day-5-ian-confession-ian-2-cg",
    background: "ian_event_6_1",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    nextSceneId: "day-5-ian-confession-ian-2",
  },

  "day-5-ian-confession-ian-2": {
    id: "day-5-ian-confession-ian-2",
    background: "ian_event_6_1",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "그런데 어느 순간부터 네가 웃으면 내가 먼저 웃고 있더라. 도서관에서 문제를 봐줄 때도, 사실 문제보다 네 표정을 더 보고 있었어.",
    nextSceneId: "day-5-ian-confession-harin",
  },

  "day-5-ian-confession-harin": {
    id: "day-5-ian-confession-harin",
    background: "ian_event_6_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "선배...",
    nextSceneId: "day-5-ian-ending-1",
  },

  "day-5-ian-ending-1": {
    id: "day-5-ian-ending-1",
    background: "ian_event_ending",
    speaker: "narrator",
    text: "봄비가 그친 동아리방에서 시작된 인연은, 어느새 하린의 하루 곳곳에 이안의 이름을 남기고 있었다.",
    nextSceneId: "day-5-ian-ending-2",
  },

  "day-5-ian-ending-2": {
    id: "day-5-ian-ending-2",
    background: "ian_event_ending_1",
    speaker: "ian",
    character: "ian",
    characterExpression: "happy",
    text: "네가 내 옆에 있으면, 내가 잘하는 것들보다 서툰 마음을 먼저 보여주고 싶어져.",
    nextSceneId: "day-5-ian-ending-3",
  },

  "day-5-ian-ending-3": {
    id: "day-5-ian-ending-3",
    background: "ian_event_ending_2",
    speaker: "narrator",
    text: "장난처럼 다가오던 말들은 조금씩 진심이 되었고, 진심은 이제 더 숨을 곳이 없었다.",
    nextSceneId: "day-5-ian-ending-4",
  },

  "day-5-ian-ending-4": {
    id: "day-5-ian-ending-4",
    background: "ian_event_ending_3",
    speaker: "ian",
    character: "ian",
    characterExpression: "embarrassed",
    text: "하린아, 좋아해. 아니... 사랑해. 앞으로도 네가 가는 길에 내가 함께 있고 싶어.",
    nextSceneId: "day-5-ian-ending-hold",
  },

  "day-5-ian-ending-hold": {
    id: "day-5-ian-ending-hold",
    background: "ian_event_ending_3",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 3000,
    nextSceneId: "day-5-ian-ending-end",
  },

  "day-5-ian-ending-end": {
    id: "day-5-ian-ending-end",
    background: "ian_event_ending_end",
    speaker: "narrator",
    text: "",
    clickToContinue: true,
    nextSceneId: "ending-credits",
  },

  "day-5-doha-confession-start": {
    id: "day-5-doha-confession-start",
    background: "doha_event_6",
    speaker: "narrator",
    text: "공원에는 늦은 오후의 빛이 조용히 내려앉아 있었다. 도하는 분수대 근처에서 하린을 기다리고 있었다.",
    delayBeforeDialogue: 3000,
    nextSceneId: "day-5-doha-confession-doha-greet",
  },

  "day-5-doha-confession-doha-greet": {
    id: "day-5-doha-confession-doha-greet",
    background: "doha_event_6",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "왔어? 늦지 않아서 다행이다. 사실... 오늘 아침부터 계속 말할 타이밍을 찾고 있었어.",
    nextSceneId: "day-5-doha-confession-harin-1",
  },

  "day-5-doha-confession-harin-1": {
    id: "day-5-doha-confession-harin-1",
    background: "doha_event_6",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "default",
    text: "동아리방에서도 그랬잖아요. 대본 연습하다가 갑자기 진지해지셔서... 저도 마음이 조금 붕 떠 있었어요.",
    nextSceneId: "day-5-doha-confession-doha-smalltalk",
  },

  "day-5-doha-confession-doha-smalltalk": {
    id: "day-5-doha-confession-doha-smalltalk",
    background: "doha_event_6",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "그때 장난친 것처럼 보였지? 미안. 웃으려고 했는데, 네 눈만 보면 말이 자꾸 진짜가 돼.",
    nextSceneId: "day-5-doha-confession-doha-hesitate",
  },

  "day-5-doha-confession-doha-hesitate": {
    id: "day-5-doha-confession-doha-hesitate",
    background: "doha_event_6",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "운동장에서 축구공 맞던 날도, 손수건 건네줄 때도... 나는 항상 네가 걱정해주길 바랐어. 그게 고마워서가 아니라, 네가 곁에 있어서.",
    nextSceneId: "day-5-doha-confession-harin-2",
  },

  "day-5-doha-confession-harin-2": {
    id: "day-5-doha-confession-harin-2",
    background: "doha_event_6",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "도하선배...",
    nextSceneId: "day-5-doha-confession-doha-bridge",
  },

  "day-5-doha-confession-doha-bridge": {
    id: "day-5-doha-confession-doha-bridge",
    background: "doha_event_6",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "그래서 오늘은 대본 핑계 안 쓸게. 네 앞에 서서, 연기 말고 진심으로 말하고 싶어.",
    nextSceneId: "day-5-doha-confession-doha-1",
  },

  "day-5-doha-confession-doha-1": {
    id: "day-5-doha-confession-doha-1",
    background: "doha_event_6",
    speaker: "doha",
    character: "doha",
    characterExpression: "default",
    text: "처음엔 그냥 신경 쓰이는 후배였어. 그런데 네가 손을 내밀어줬던 순간부터, 자꾸 그 손끝이 생각났어.",
    nextSceneId: "day-5-doha-confession-doha-2-cg",
  },

  "day-5-doha-confession-doha-2-cg": {
    id: "day-5-doha-confession-doha-2-cg",
    background: "doha_event_6_1",
    speaker: "narrator",
    text: "",
    autoAdvanceMs: 2000,
    nextSceneId: "day-5-doha-confession-doha-2",
  },

  "day-5-doha-confession-doha-2": {
    id: "day-5-doha-confession-doha-2",
    background: "doha_event_6_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "분수대에 빠진 날도, 양호실에서 잔소리하던 날도... 네가 걱정해주는 게 싫지 않았어. 오히려 더 듣고 싶었어. 네가 있으면, 이상하게 내 하루가 더 밝아져.",
    nextSceneId: "day-5-doha-confession-doha-3",
  },

  "day-5-doha-confession-doha-3": {
    id: "day-5-doha-confession-doha-3",
    background: "doha_event_6_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "하린이, 나는 너를 좋아해. 장난처럼 말하고 싶지 않아. 앞으로도 네 옆에서, 진짜 연인처럼 있고 싶어.",
    nextSceneId: "day-5-doha-confession-harin",
  },

  "day-5-doha-confession-harin": {
    id: "day-5-doha-confession-harin",
    background: "doha_event_6_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "도하선배...",
    nextSceneId: "day-5-doha-ending-1",
  },

  "day-5-doha-ending-1": {
    id: "day-5-doha-ending-1",
    background: "doha_event_ending",
    speaker: "narrator",
    text: "무심한 듯 건네던 말들 사이에는, 늘 하린을 향한 조심스러운 시선이 숨어 있었다.",
    nextSceneId: "day-5-doha-ending-princess-carry",
  },

  "day-5-doha-ending-princess-carry": {
    id: "day-5-doha-ending-princess-carry",
    background: "doha_event_ending_1",
    speaker: "narrator",
    text: "갑자기 도하는 하린을 안아올렸다. 무척 사랑스럽다는 듯이 조심히.",
    nextSceneId: "day-5-doha-ending-harin-surprised",
  },

  "day-5-doha-ending-harin-surprised": {
    id: "day-5-doha-ending-harin-surprised",
    background: "doha_event_ending_1",
    speaker: "heroine",
    character: "heroine",
    characterExpression: "embarrassed",
    text: "서! 선배!",
    nextSceneId: "day-5-doha-ending-2",
  },

  "day-5-doha-ending-2": {
    id: "day-5-doha-ending-2",
    background: "doha_event_ending_1",
    speaker: "doha",
    character: "doha",
    characterExpression: "happy",
    text: "네가 웃어주면 이상하게 하루가 괜찮아져. 아무 일 없던 날도 특별해지고.",
    nextSceneId: "day-5-doha-ending-3",
  },

  "day-5-doha-ending-3": {
    id: "day-5-doha-ending-3",
    background: "doha_event_ending_2",
    speaker: "narrator",
    text: "차가운 물소리도, 조용한 양호실의 오후도, 이제는 두 사람만 아는 기억이 되었다.",
    nextSceneId: "day-5-doha-ending-4",
  },

  "day-5-doha-ending-4": {
    id: "day-5-doha-ending-4",
    background: "doha_event_ending_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "하린아, 좋아해. 아니, 사랑해. 네가 괜찮다면 앞으로는 내가 더 많이 솔직해질게.",
    nextSceneId: "day-5-doha-ending-love",
  },

  "day-5-doha-ending-love": {
    id: "day-5-doha-ending-love",
    background: "doha_event_ending_3",
    speaker: "doha",
    character: "doha",
    characterExpression: "embarrassed",
    text: "사랑해 하린아..",
    nextSceneId: "day-5-doha-ending-end",
  },

  "day-5-doha-ending-end": {
    id: "day-5-doha-ending-end",
    background: "doha_event_ending_end",
    speaker: "narrator",
    text: "",
    clickToContinue: true,
    nextSceneId: "ending-credits",
  },

  "ending-credits": {
    id: "ending-credits",
    background: "title",
    speaker: "narrator",
    text: "제작자 | Josiana",
    ending: true,
  },
};
