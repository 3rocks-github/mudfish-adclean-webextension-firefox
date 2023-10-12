
function mudfish_adclean_42a520455b2a6f9c00f0ade0a30c8d96() {
  try {
    Sizzle(`.article_wrap .bottom_articles`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_42a520455b2a6f9c00f0ade0a30c8d96 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_42a520455b2a6f9c00f0ade0a30c8d96, function (items) {
  if (mudfish_adclean_g_conf_42a520455b2a6f9c00f0ade0a30c8d96.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_42a520455b2a6f9c00f0ade0a30c8d96();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
