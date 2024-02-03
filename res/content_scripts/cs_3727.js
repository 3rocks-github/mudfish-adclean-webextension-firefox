
function mudfish_adclean_1d67cc14e1196225ba5c22a8893f8e94() {
  try {
    Sizzle(`div[itemprop="articleBody"] > div[style^="margin:"].clearfix`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1d67cc14e1196225ba5c22a8893f8e94 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1d67cc14e1196225ba5c22a8893f8e94, function (items) {
  if (mudfish_adclean_g_conf_1d67cc14e1196225ba5c22a8893f8e94.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1d67cc14e1196225ba5c22a8893f8e94();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1d67cc14e1196225ba5c22a8893f8e94();
    });
  }
});
