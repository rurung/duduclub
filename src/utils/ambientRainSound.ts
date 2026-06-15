const rainSoundUrl = new URL(
  "../assets/audio/liecio-calming-rain-257596.mp3",
  import.meta.url,
).href;

export const RAIN_AMBIENT_BACKGROUND = "title_1";

const TARGET_VOLUME = 0.55;

let rainAudio: HTMLAudioElement | null = null;
let fadeFrameId: number | undefined;

function getRainAudio() {
  if (!rainAudio) {
    rainAudio = new Audio(rainSoundUrl);
    rainAudio.loop = true;
  }

  return rainAudio;
}

function cancelRainFade() {
  if (fadeFrameId !== undefined) {
    cancelAnimationFrame(fadeFrameId);
    fadeFrameId = undefined;
  }
}

function fadeRainVolume(targetVolume: number, durationMs: number) {
  const audio = getRainAudio();
  const startVolume = audio.volume;
  const startTime = performance.now();

  cancelRainFade();

  return new Promise<void>((resolve) => {
    if (durationMs <= 0) {
      audio.volume = targetVolume;
      resolve();
      return;
    }

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      audio.volume = startVolume + (targetVolume - startVolume) * progress;

      if (progress >= 1) {
        fadeFrameId = undefined;
        resolve();
        return;
      }

      fadeFrameId = requestAnimationFrame(step);
    };

    fadeFrameId = requestAnimationFrame(step);
  });
}

export async function playRainAmbient(fadeInMs = 1200) {
  const audio = getRainAudio();
  cancelRainFade();
  audio.volume = 0;

  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      return;
    }
  }

  await fadeRainVolume(TARGET_VOLUME, fadeInMs);
}

export async function stopRainAmbient(fadeOutMs = 1200) {
  if (!rainAudio) {
    return;
  }

  cancelRainFade();

  if (fadeOutMs <= 0) {
    rainAudio.pause();
    rainAudio.currentTime = 0;
    rainAudio.volume = 0;
    return;
  }

  await fadeRainVolume(0, fadeOutMs);
  rainAudio.pause();
  rainAudio.currentTime = 0;
}
