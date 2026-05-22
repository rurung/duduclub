import { getBackgroundUrl } from "../utils/backgroundAssets";

export type SelectedGalleryImage = {
  title: string;
  background: string;
};

type GalleryModalProps = {
  image: SelectedGalleryImage;
  onClose: () => void;
};

export function GalleryModal({ image, onClose }: GalleryModalProps) {
  return (
    <div
      className="gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
    >
      <button
        className="gallery-modal__backdrop"
        type="button"
        aria-label="닫기"
        onClick={onClose}
      />
      <div className="gallery-modal__content">
        <img
          className="gallery-modal__image"
          src={getBackgroundUrl(image.background)}
          alt={image.title}
        />
        <div className="gallery-modal__bar">
          <strong>{image.title}</strong>
          <button className="gallery-modal__close" type="button" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
