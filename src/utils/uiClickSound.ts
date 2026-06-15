const clickSoundUrl = new URL(
  "../assets/audio/mouse-click.mp3",
  import.meta.url,
).href;

let clickAudio: HTMLAudioElement | null = null;

export function playUiClickSound() {
  if (!clickAudio) {
    clickAudio = new Audio(clickSoundUrl);
  }

  clickAudio.currentTime = 0;
  void clickAudio.play().catch(() => {
    // 사용자 제스처 없이 재생이 막힌 경우는 무시합니다.
  });
}
/* 사운드 제작 pixabay : https://pixabay.com/ko/sounds/mouse-click-115106/ */
/* 사운드 제작자 : Universfield */