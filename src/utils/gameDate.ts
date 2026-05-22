export type GameDate = {
  year: number;
  month: number;
  day: number;
};

export const INITIAL_GAME_DATE: GameDate = {
  year: 2026,
  month: 5,
  day: 20,
};

export function addDays(date: GameDate, days: number): GameDate {
  const next = new Date(date.year, date.month - 1, date.day + days);

  return {
    year: next.getFullYear(),
    month: next.getMonth() + 1,
    day: next.getDate(),
  };
}
