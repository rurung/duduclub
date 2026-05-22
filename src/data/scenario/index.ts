import type { Scene } from "../../types/game";
import { day1Scenes } from "./day1";
import { day2Scenes } from "./day2";
import { day3Scenes } from "./day3";
import { day4Scenes } from "./day4";
import { day5Scenes } from "./day5";
import { endingScenes } from "./endings";
import { seoinScenes } from "./seoin";

export const initialAffection = {
  ian: 0,
  doha: 0,
  seoin: 0,
};

// 전체 시나리오를 날짜/루트별 파일에서 합쳐 게임 엔진에 전달한다.
export const scenes: Record<string, Scene> = {
  ...day1Scenes,
  ...day2Scenes,
  ...day3Scenes,
  ...day4Scenes,
  ...day5Scenes,
  ...seoinScenes,
  ...endingScenes,
};
