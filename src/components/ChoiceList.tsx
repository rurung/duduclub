import type { Choice } from "../types/game";
import { playUiClickSound } from "../utils/uiClickSound";

type ChoiceListProps = {
  choices: Choice[];
  onSelect: (choice: Choice) => void;
};

export function ChoiceList({ choices, onSelect }: ChoiceListProps) {
  return (
    <div className="choice-list">
      {choices.map((choice) => {
        const isAffectionCheck = choice.text === "애정도 확인";
        const isDayEnd = choice.text.includes("잠들어 볼까?");
        const buttonClassNames = [
          "choice-list__button",
          isAffectionCheck ? "choice-list__button--affection" : "",
          isDayEnd ? "choice-list__button--day-end" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            className={buttonClassNames}
            key={choice.text}
            type="button"
            onClick={() => {
              playUiClickSound();
              onSelect(choice);
            }}
          >
            <span className="choice-list__label">
              <span>{choice.text}</span>
              {isAffectionCheck && (
                <span className="choice-list__heart" aria-hidden="true">
                  ♥
                </span>
              )}
            </span>
            {isAffectionCheck && (
              <span className="choice-list__hint">
                애정도 확인 후 다음날로 넘어갈 수있습니다.
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
