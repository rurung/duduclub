import { useMemo, useState } from "react";
import { gallerySections } from "../data/gallery";
import { GalleryCard } from "./GalleryCard";
import { GalleryModal, type SelectedGalleryImage } from "./GalleryModal";

type GalleryProps = {
  collectedImages: Record<string, boolean>;
  onClose: () => void;
};

export function Gallery({ collectedImages, onClose }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedGalleryImage>();
  const seoinUnlocked = gallerySections
    .find((section) => section.id === "seoin")
    ?.images.some((image) => collectedImages[image.background]);

  const totalCollected = useMemo(
    () => Object.values(collectedImages).filter(Boolean).length,
    [collectedImages],
  );
  const totalImages = gallerySections.reduce(
    (total, section) => total + section.images.length,
    0,
  );

  return (
    <section className="gallery-screen">
      <header className="gallery-screen__header">
        <div>
          <h1 className="gallery-screen__title">갤러리</h1>
          <p className="gallery-screen__count">
            {totalCollected} / {totalImages}
          </p>
        </div>
        <button className="gallery-screen__close" type="button" onClick={onClose}>
          처음으로
        </button>
      </header>

      <div className="gallery-screen__sections">
        {gallerySections.map((section) => {
          const isHiddenSection = section.id === "seoin" && !seoinUnlocked;
          const sectionName = isHiddenSection
            ? (section.hiddenName ?? "???")
            : section.name;

          return (
            <section className="gallery-section" key={section.id}>
              <h2 className="gallery-section__title">{sectionName}</h2>
              <div className="gallery-grid">
                {section.images.map((image) => {
                  const isCollected = Boolean(collectedImages[image.background]);
                  const title = isHiddenSection ? "???" : image.title;

                  return (
                    <GalleryCard
                      background={image.background}
                      isCollected={isCollected}
                      key={image.id}
                      title={title}
                      onSelect={() =>
                        setSelectedImage({
                          title,
                          background: image.background,
                        })
                      }
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {selectedImage && (
        <GalleryModal
          image={selectedImage}
          onClose={() => setSelectedImage(undefined)}
        />
      )}
    </section>
  );
}
