import type { Character, CharacterExpression } from "../types/game";

const portraitFiles = import.meta.glob("../assets/characters/*.png", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const getPortraitUrl = (fileName: string) => {
  const portraitPath = Object.keys(portraitFiles).find((path) =>
    path.endsWith(fileName),
  );
  return portraitPath ? portraitFiles[portraitPath] : undefined;
};

export const characters: Character[] = [
  {
    id: "heroine",
    name: "하린",
    role: "heroine",
    color: "#f3a3b5",
    description: "새 학기를 맞아 낯선 동아리에 들어온 주인공.",
    expressions: {
      default: getPortraitUrl("heroine-default.png"),
      happy: getPortraitUrl("heroine-happy.png"),
      embarrassed: getPortraitUrl("heroine-embarrassed.png"),
    },
  },
  {
    id: "heroine-grow",
    name: "하린",
    role: "heroine",
    color: "#f3a3b5",
    description: "시간이 지나 어른이 된 하린.",
    expressions: {
      default: getPortraitUrl("heroine-grow_default.png"),
      happy: getPortraitUrl("heroine-grow_happy.png"),
    },
  },
  {
    id: "ian",
    name: "이안",
    role: "love-interest",
    color: "#5a8dee",
    description: "다정하지만 속마음을 쉽게 보이지 않는 선배.",
    expressions: {
      default: getPortraitUrl("ian-default.png"),
      happy: getPortraitUrl("ian-happy.png"),
      embarrassed: getPortraitUrl("ian-embarrassed.png"),
    },
  },
  {
    id: "doha",
    name: "도하",
    role: "love-interest",
    color: "#40a86f",
    description: "시크하고 까칠한것 같지만 다정한 선배",
    expressions: {
      default: getPortraitUrl("doha-default.png"),
      happy: getPortraitUrl("doha-happy.png"),
      embarrassed: getPortraitUrl("doha-embarrassed.png"),
    },
  },
  {
    id: "seoin",
    name: "서인 선생님",
    role: "teacher",
    color: "#6b7280",
    description: "늘 다정한 미소를 짓지만 어딘가 알 수 없는 분위기를 가진 선생님.",
    expressions: {
      default: getPortraitUrl("seoin-default.png"),
      happy: getPortraitUrl("seoin-happy.png"),
      embarrassed: getPortraitUrl("seoin-embarrassed.png"),
      dark: getPortraitUrl("seoin_dark_default.png"),
      darkEmbarrassed: getPortraitUrl("seoin_dark_embrrassed.png"),
      rage: getPortraitUrl("seoin_dark_Rage.png"),
    },
  },
];

export const getCharacter = (id: Character["id"]) => {
  return characters.find((character) => character.id === id);
};

const loadedPortraits = new Set<string>();
const loadingPortraits = new Map<string, Promise<void>>();

const preloadPortrait = (portraitUrl: string) => {
  if (loadedPortraits.has(portraitUrl)) {
    return Promise.resolve();
  }

  const currentLoad = loadingPortraits.get(portraitUrl);
  if (currentLoad) {
    return currentLoad;
  }

  const load = new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = async () => {
      try {
        await image.decode?.();
      } catch {
        // Some browsers reject decode after a successful load even though the image is usable.
      }

      loadedPortraits.add(portraitUrl);
      loadingPortraits.delete(portraitUrl);
      resolve();
    };

    image.onerror = () => {
      loadingPortraits.delete(portraitUrl);
      resolve();
    };

    image.src = portraitUrl;
  });

  loadingPortraits.set(portraitUrl, load);
  return load;
};

export const preloadCharacterPortraits = () => {
  const portraitUrls = characters.flatMap((character) =>
    Object.values(character.expressions ?? {}).filter(Boolean),
  ) as string[];

  return Promise.all(portraitUrls.map(preloadPortrait)).then(() => undefined);
};
