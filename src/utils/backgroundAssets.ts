const backgroundFiles = import.meta.glob(
  [
    "../assets/backgrounds/**/*.{png,jpg,jpeg}",
    "../assets/cg/**/*.{png,jpg,jpeg}",
    "../assets/event/**/*.{png,jpg,jpeg}",
  ],
  {
    eager: true,
    as: "url",
  },
) as Record<string, string>;

const backgroundPlaceholderFiles = import.meta.glob(
  "../assets/placeholders/**/*.{jpg,jpeg}",
  {
    eager: true,
    as: "url",
  },
) as Record<string, string>;

const loadedBackgrounds = new Set<string>();
const loadingBackgrounds = new Map<string, Promise<void>>();

const findBackgroundAsset = (
  files: Record<string, string>,
  background: string,
) => {
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
    const path = Object.keys(files).find((key) =>
      key.endsWith(`/${candidate}`),
    );
    if (path) {
      return files[path];
    }
  }

  return undefined;
};

const loadImage = (imageUrl: string) =>
  new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = async () => {
      try {
        await image.decode?.();
      } catch {
        // Some browsers can reject decode after onload even though the image is usable.
      }

      resolve();
    };
    image.onerror = () => {
      resolve();
    };
    image.src = imageUrl;
  });

export const getBackgroundUrl = (background: string) =>
  findBackgroundAsset(backgroundFiles, background);

export const getBackgroundPlaceholderUrl = (background: string) =>
  findBackgroundAsset(backgroundPlaceholderFiles, background);

export const isBackgroundLoaded = (background: string) => {
  const backgroundUrl = getBackgroundUrl(background);

  return !backgroundUrl || loadedBackgrounds.has(backgroundUrl);
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

  const load = loadImage(backgroundUrl).then(() => {
    loadedBackgrounds.add(backgroundUrl);
    loadingBackgrounds.delete(backgroundUrl);
  });

  loadingBackgrounds.set(backgroundUrl, load);
  return load;
};

export const preloadBackgrounds = (backgrounds: string[]) =>
  Promise.all(backgrounds.map(preloadBackground)).then(() => undefined);
