import { FormEvent, useEffect, useMemo, useState } from "react";
import type { GuestbookEntry } from "../types/guestbook";
import {
  createGuestbookEntry,
  deleteGuestbookEntry,
  fetchGuestbookEntries,
  updateGuestbookEntry,
} from "../utils/guestbookApi";

type GuestbookProps = {
  onClose: () => void;
};

const formatGuestbookDate = (createdAt: string) =>
  new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(createdAt));

const MESSAGE_MAX_LENGTH = 200;

export function Guestbook({ onClose }: GuestbookProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [editingEntryId, setEditingEntryId] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(
    () => nickname.trim().length > 0 && message.trim().length > 0,
    [message, nickname],
  );

  useEffect(() => {
    fetchGuestbookEntries().then(setEntries);
  }, []);

  const submitEntry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const nextNickname = nickname.trim().slice(0, 12);
    const nextMessage = message.trim().slice(0, MESSAGE_MAX_LENGTH);

    if (editingEntryId) {
      const updatedEntry = await updateGuestbookEntry({
        id: editingEntryId,
        nickname: nextNickname,
        message: nextMessage,
      });

      if (updatedEntry) {
        setEntries((currentEntries) =>
          currentEntries.map((entry) =>
            entry.id === updatedEntry.id ? updatedEntry : entry,
          ),
        );
      }
    } else {
      const entry = await createGuestbookEntry({
        nickname: nextNickname,
        message: nextMessage,
      });

      setEntries((currentEntries) => [entry, ...currentEntries]);
    }

    setNickname("");
    setMessage("");
    setEditingEntryId(undefined);
    setIsSubmitting(false);
  };

  const startEditing = (entry: GuestbookEntry) => {
    setEditingEntryId(entry.id);
    setNickname(entry.nickname);
    setMessage(entry.message);
  };

  const cancelEditing = () => {
    setEditingEntryId(undefined);
    setNickname("");
    setMessage("");
  };

  const deleteEntry = async (entryId: string) => {
    await deleteGuestbookEntry(entryId);
    setEntries((currentEntries) =>
      currentEntries.filter((entry) => entry.id !== entryId),
    );

    if (editingEntryId === entryId) {
      cancelEditing();
    }
  };

  return (
    <section className="guestbook-screen">
      <header className="guestbook-screen__header">
        <div>
          <h1 className="guestbook-screen__title">의견방</h1>
          <p className="guestbook-screen__subtitle">플레이 후 남겨두는 의견</p>
        </div>
        <button
          className="guestbook-screen__close"
          type="button"
          onClick={onClose}
        >
          처음으로
        </button>
      </header>

      <div className="guestbook-screen__entries" aria-live="polite">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <article className="guestbook-entry" key={entry.id}>
              <div className="guestbook-entry__meta">
                <strong className="guestbook-entry__nickname">
                  {entry.nickname}
                </strong>
                <div className="guestbook-entry__side">
                  <time
                    className="guestbook-entry__date"
                    dateTime={entry.createdAt}
                  >
                    {formatGuestbookDate(entry.createdAt)}
                  </time>
                  <div className="guestbook-entry__actions">
                    <button
                      type="button"
                      aria-label="수정"
                      onClick={() => startEditing(entry)}
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      aria-label="삭제"
                      onClick={() => deleteEntry(entry.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
              <p className="guestbook-entry__message">{entry.message}</p>
            </article>
          ))
        ) : (
          <div className="guestbook-empty">
            <p>아직 남겨진 글이 없어요.</p>
            <p>첫 번째 한마디를 남겨주세요.</p>
          </div>
        )}
      </div>

      <form className="guestbook-form" onSubmit={submitEntry}>
        <label className="guestbook-form__field">
          <span>닉네임</span>
          <input
            maxLength={12}
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="닉네임"
          />
        </label>
        <label className="guestbook-form__field guestbook-form__field--message">
          <span>한마디</span>
          <textarea
            maxLength={MESSAGE_MAX_LENGTH}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="테스트에 대한 다양한 의견 환영합니다!"
          />
          <span className="guestbook-form__counter">
            {message.length} / {MESSAGE_MAX_LENGTH}자
          </span>
        </label>
        <button
          className="guestbook-form__submit"
          type="submit"
          disabled={!canSubmit || isSubmitting}
        >
          {editingEntryId ? "수정" : "남기기"}
        </button>
        {editingEntryId && (
          <button
            className="guestbook-form__cancel"
            type="button"
            onClick={cancelEditing}
          >
            취소
          </button>
        )}
      </form>
    </section>
  );
}
