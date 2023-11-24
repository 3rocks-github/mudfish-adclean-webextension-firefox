var mudfish_adclean_youtube_hide_timer = null;

(function () {

  function mudfish_adclean_youtubue_skip2() {
    const video = document.querySelector('video');
    const adElement = document.querySelector('.video-ads.ytp-ad-module');
    if (video && adElement && adElement.children.length > 0) {
      video.muted = true;
      video.playbackRate = 10.0;
    }
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
    if (skipButton) {
      skipButton.click();
    }
  }

  function mudfish_adclean_youtube_hide() {
    try {
      document.querySelectorAll("ytd-player-legacy-desktop-watch-ads-renderer").forEach(element => {
        element.style.display = 'none';
      });
      document.querySelectorAll("ytd-ad-slot-renderer").forEach(element => {
        element.style.display = 'none';
      });
    } catch (error) {
    }
  }

  function mudfish_adclean_youtube_skip() {
    try {
      document.querySelector(".ytp-ad-skip-button").parentElement.parentElement.click();
    } catch (error) {
    }
    try {
      var a = document.querySelector("#movie_player").getAttribute("class");
      if (a.indexOf("ad-showing") != -1) {
        if (typeof document.querySelector("video").fastSeek !== 'undefined') {
          document.querySelector("video").fastSeek("600");
        }
        if (typeof document.querySelector("video").currentTime !== 'undefined') {
          document.querySelector("video").currentTime = 600;
        }
      }
    } catch (error) {
    }
    mudfish_adclean_youtubue_skip2();
  }

  const observer = new MutationObserver(() => {
    mudfish_adclean_youtube_skip();
    if (mudfish_adclean_youtube_hide_timer) {
      window.clearTimeout(mudfish_adclean_youtube_hide_timer);
    }
    mudfish_adclean_youtube_hide_timer = window.setTimeout(mudfish_adclean_youtube_hide, 1000);
  });
  observer.observe(document, { childList: true, subtree: true });
})();
