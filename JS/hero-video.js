document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.hero__video');
  if (!video || !video.dataset.src) return;
  const loadVideo = () => {
    if (window.matchMedia('(min-width: 769px)').matches) {
      video.src = video.dataset.src;
      video.load();
    }
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadVideo);
  } else {
    setTimeout(loadVideo, 0);
  }
});

