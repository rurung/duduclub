import { playUiClickSound } from "../utils/uiClickSound";

type DialogueBoxProps = {
  speakerName: string;
  text: string;
  canContinue: boolean;
  canGoBack: boolean;
  onContinue: () => void;
  onGoBack: () => void;
  animate?: boolean;
};

export function DialogueBox({
  speakerName,
  text,
  canContinue,
  canGoBack,
  onContinue,
  onGoBack,
  animate = false,
}: DialogueBoxProps) {
  const isWarningText =
    text ===
    "연극부 정기공연 당일, 학생 한 명 실종... 무대 장치 사고 가능성... 조사 중...";

  return (
    <section
      className={`dialogue-box${animate ? " dialogue-box--fade-in" : ""}`}
    >
      <div className="dialogue-box__speaker">{speakerName}</div>
      <p
        className={`dialogue-box__text${
          isWarningText ? " dialogue-box__text--warning" : ""
        }`}
      >
        {text}
      </p>
      {(canGoBack || canContinue) && (
        <div className="dialogue-box__actions">
          {canGoBack && (
            <button
              className="dialogue-box__back"
              type="button"
              onClick={() => {
                playUiClickSound();
                onGoBack();
              }}
            >
              뒤로가기
            </button>
          )}
          {canContinue && (
            <button
              className="dialogue-box__next"
              type="button"
              onClick={() => {
                playUiClickSound();
                onContinue();
              }}
            >
              다음
            </button>
          )}
        </div>
      )}
    </section>
  );
}
