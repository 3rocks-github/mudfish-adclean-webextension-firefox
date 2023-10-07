var mudfish_adclean_youtube_hide_timer = null;

(function () {
  function mudfish_adclean_youtube_hide() {
    try {
      var a = document.querySelector("ytd-player-legacy-desktop-watch-ads-renderer");
      if (a !== null) {
        a.style.display = 'none';
      }
      var b = document.querySelector("ytd-ad-slot-renderer");
      if (b !== null) {
        b.style.display = 'none';
      }
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
          document.querySelector("video").fastSeek("60");
        }
        if (typeof document.querySelector("video").currentTime !== 'undefined') {
          document.querySelector("video").currentTime = 60;
        }
      }
    } catch (error) {
    }
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
