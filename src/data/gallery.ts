export type GalleryCharacterId = "heroine" | "ian" | "doha" | "hidden" | "seoin";

export type GalleryImage = {
  id: string;
  title: string;
  background: string;
};

export type GallerySection = {
  id: GalleryCharacterId;
  name: string;
  hiddenName?: string;
  images: GalleryImage[];
};

export const gallerySections: GallerySection[] = [
  {
    id: "heroine",
    name: "하린",
    images: [
      {
        id: "heroine-ending",
        title: "나의 내일",
        background: "heroine_ending",
      },
    ],
  },
  {
    id: "ian",
    name: "이안",
    images: [
      { id: "ian-first", title: "복도에서", background: "ian_event_1" },
      { id: "ian-rooftop", title: "옥상 소동", background: "ian_event_1_1" },
      { id: "ian-park", title: "공원의 오후", background: "ian_event_2" },
      { id: "ian-library", title: "도서관의 안경", background: "ian_event_3" },
      { id: "ian-workshop", title: "정비 실습실", background: "ian_event_4" },
      { id: "ian-valentine", title: "발렌타인", background: "ian_event_5" },
      { id: "ian-confession", title: "옥상의 고백", background: "ian_event_6" },
      { id: "ian-confession-2", title: "흔들린 시선", background: "ian_event_6_1" },
      { id: "ian-ending-1", title: "함께 걷는 길", background: "ian_event_ending" },
      { id: "ian-ending-2", title: "따뜻한 시선", background: "ian_event_ending_1" },
      { id: "ian-ending-3", title: "겹쳐진 기억", background: "ian_event_ending_2" },
      { id: "ian-ending-4", title: "사랑해", background: "ian_event_ending_3" },
      { id: "ian-ending-end", title: "이안 엔딩", background: "ian_event_ending_end" },
    ],
  },
  {
    id: "doha",
    name: "도하",
    images: [
      { id: "doha-clubroom", title: "동아리방의 낮잠", background: "doha_event_1" },
      { id: "doha-clubroom-2", title: "가까운 거리", background: "doha_event_2" },
      { id: "doha-field", title: "운동장의 상처", background: "doha_event_3" },
      { id: "doha-fountain", title: "분수대 사건", background: "doha_event_4" },
      { id: "doha-valentine", title: "발렌타인", background: "doha_event_5" },
      { id: "doha-confession", title: "공원의 고백", background: "doha_event_6" },
      { id: "doha-confession-2", title: "듣고 싶은 걱정", background: "doha_event_6_1" },
      { id: "doha-ending-1", title: "숨겨둔 마음", background: "doha_event_ending" },
      { id: "doha-ending-2", title: "공주님 안기", background: "doha_event_ending_1" },
      { id: "doha-ending-3", title: "둘만의 기억", background: "doha_event_ending_2" },
      { id: "doha-ending-4", title: "솔직한 마음", background: "doha_event_ending_3" },
      { id: "doha-ending-end", title: "도하 엔딩", background: "doha_event_ending_end" },
    ],
  },
  {
    id: "hidden",
    name: "히든 이벤트",
    images: [
      { id: "hidden-combi-1", title: "시간을 건너서", background: "combi_event_1" },
      { id: "hidden-combi-2", title: "뛰어난 연기력", background: "combi_event_1_2" },
      { id: "hidden-combi-3", title: "무대가 된 순간", background: "combi_event_1_3" },
    ],
  },
  {
    id: "seoin",
    name: "서인 선생님",
    hiddenName: "???",
    images: [
      { id: "seoin-first", title: "첫 마주침", background: "seoin_event_1" },
      { id: "seoin-collision", title: "신관의 충돌", background: "seoin_event_2" },
      { id: "seoin-cold", title: "싸늘한 표정", background: "seoin_event_2_1" },
      { id: "seoin-key", title: "반짝이는 열쇠", background: "heroine_key" },
      { id: "seoin-poster", title: "기억속의 무대", background: "seoin_event_3" },
      { id: "seoin-memory", title: "낡은 포스터", background: "seoin_event_4_1" },
      { id: "seoin-rain", title: "비 오는 밤", background: "seoin_event_5" },
      { id: "seoin-photo", title: "빛바랜 사진", background: "seoin_event_6" },
      { id: "seoin-truth", title: "보면 안 됐어", background: "seoin_event_7" },
      { id: "seoin-salvation", title: "혼자 받은 벌", background: "seoin_event_7_1" },
      { id: "seoin-dawn", title: "새벽 햇살", background: "seoin_event_8_1" },
      { id: "seoin-promise", title: "어른이 되면", background: "seoin_event_8" },
      { id: "seoin-glasses", title: "구해줘서 고마워", background: "seoin_event_8_2" },
      { id: "seoin-hug", title: "따뜻한 포옹", background: "seoin_event_8_3" },
      { id: "seoin-ending-1", title: "다시 열린 무대", background: "seoin_event_ending_1" },
      { id: "seoin-ending-2", title: "오래 기다린 마음", background: "seoin_event_ending_2" },
      { id: "seoin-ending-normal", title: "서인 엔딩", background: "seoin_event_ending_end_1" },
      { id: "seoin-ending-end", title: "서인 진엔딩", background: "seoin_event_ending_end" },
    ],
  },
];

export const galleryBackgrounds = new Set(
  gallerySections.flatMap((section) =>
    section.images.map((image) => image.background),
  ),
);
