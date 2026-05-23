import type { GuestbookEntry } from "../types/guestbook";

const GUESTBOOK_STORAGE_KEY = "arktis-guestbook-entries";

const readEntries = () => {
  try {
    return JSON.parse(
      window.localStorage.getItem(GUESTBOOK_STORAGE_KEY) ?? "[]",
    ) as GuestbookEntry[];
  } catch {
    return [];
  }
};

const writeEntries = (entries: GuestbookEntry[]) => {
  window.localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(entries));
};

const createGuestbookId = () =>
  window.crypto.randomUUID?.() ??
  `guestbook-${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const fetchGuestbookEntries = async () =>
  readEntries().sort(
    (left, right) =>
      new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime(),
  );

export const createGuestbookEntry = async ({
  nickname,
  message,
}: Pick<GuestbookEntry, "nickname" | "message">) => {
  const entry: GuestbookEntry = {
    id: createGuestbookId(),
    nickname,
    message,
    createdAt: new Date().toISOString(),
  };
  const entries = await fetchGuestbookEntries();
  const nextEntries = [entry, ...entries];

  writeEntries(nextEntries);

  return entry;
};

export const updateGuestbookEntry = async ({
  id,
  nickname,
  message,
}: Pick<GuestbookEntry, "id" | "nickname" | "message">) => {
  const entries = await fetchGuestbookEntries();
  const nextEntries = entries.map((entry) =>
    entry.id === id ? { ...entry, nickname, message } : entry,
  );

  writeEntries(nextEntries);

  return nextEntries.find((entry) => entry.id === id);
};

export const deleteGuestbookEntry = async (id: string) => {
  const entries = await fetchGuestbookEntries();
  const nextEntries = entries.filter((entry) => entry.id !== id);

  writeEntries(nextEntries);
};
