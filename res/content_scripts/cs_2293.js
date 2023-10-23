
function mudfish_adclean_5ef5058945663fb9f83f8729f3c72c66() {
  try {
    Sizzle(`.cs_news_area .cs_area`).forEach(element => {
      element.style.width = "calc(100% - 2px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5ef5058945663fb9f83f8729f3c72c66 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5ef5058945663fb9f83f8729f3c72c66, function (items) {
  if (mudfish_adclean_g_conf_5ef5058945663fb9f83f8729f3c72c66.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5ef5058945663fb9f83f8729f3c72c66();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5ef5058945663fb9f83f8729f3c72c66();
    });
  }
});
