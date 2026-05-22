const backgroundFiles = import.meta.glob("../assets/**/*.{png,jpg,jpeg}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const loadedBackgrounds = new Set<string>();
const loadingBackgrounds = new Map<string, Promise<void>>();

export const getBackgroundUrl = (background: string) => {
  const candidates = [
    `${background}.png`,
    `${background}.jpg`,
    `${background}.jpeg`,
    `${background.replace(/-/g, "_")}.png`,
    `${background.replace(/-/g, "_")}.jpg`,
    `${background.replace(/-/g, "_")}.jpeg`,
    `${background.replace(/_/g, "-")}.png`,
    `${background.replace(/_/g, "-")}.jpg`,
    `${background.replace(/_/g, "-")}.jpeg`,
  ];

  for (const candidate of candidates) {
    const path = Object.keys(backgroundFiles).find((key) =>
      key.endsWith(`/${candidate}`),
    );
    if (path) {
      return backgroundFiles[path];
    }
  }

  return undefined;
};

export const preloadBackground = (background: string) => {
  const backgroundUrl = getBackgroundUrl(background);

  if (!backgroundUrl || loadedBackgrounds.has(backgroundUrl)) {
    return Promise.resolve();
  }

  const currentLoad = loadingBackgrounds.get(backgroundUrl);
  if (currentLoad) {
    return currentLoad;
  }

  const load = new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = async () => {
      try {
        await image.decode?.();
      } catch {
        // Some browsers can reject decode after onload even though the image is usable.
      }

      loadedBackgrounds.add(backgroundUrl);
      loadingBackgrounds.delete(backgroundUrl);
      resolve();
    };
    image.onerror = () => {
      loadingBackgrounds.delete(backgroundUrl);
      resolve();
    };
    image.src = backgroundUrl;
  });

  loadingBackgrounds.set(backgroundUrl, load);
  return load;
};
