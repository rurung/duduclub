import { getBackgroundUrl } from "../utils/backgroundAssets";

type GalleryCardProps = {
  background: string;
  isCollected: boolean;
  title: string;
  onSelect: () => void;
};

export function GalleryCard({
  background,
  isCollected,
  title,
  onSelect,
}: GalleryCardProps) {
  const imageUrl = getBackgroundUrl(background);

  return (
    <button
      className={`gallery-card${isCollected ? " gallery-card--collected" : ""}`}
      disabled={!isCollected}
      type="button"
      onClick={onSelect}
    >
      <div className="gallery-card__media">
        {isCollected && imageUrl ? (
          <img className="gallery-card__image" src={imageUrl} alt={title} />
        ) : (
          <div className="gallery-card__locked">?</div>
        )}
      </div>
      <span className="gallery-card__title">
        {isCollected ? title : "미수집"}
      </span>
    </button>
  );
}
