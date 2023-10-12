
function mudfish_adclean_9a1bd3d31288a305b39a098c26c214e7() {
  try {
    Sizzle(`.banner_wrap .swiper-wrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9a1bd3d31288a305b39a098c26c214e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9a1bd3d31288a305b39a098c26c214e7, function (items) {
  if (mudfish_adclean_g_conf_9a1bd3d31288a305b39a098c26c214e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9a1bd3d31288a305b39a098c26c214e7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
