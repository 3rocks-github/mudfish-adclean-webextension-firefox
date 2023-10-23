
function mudfish_adclean_fb373699c515f1ddd0afdfaa99bd2ddd() {
  try {
    Sizzle(`.basic-banner.row.row-10`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb373699c515f1ddd0afdfaa99bd2ddd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb373699c515f1ddd0afdfaa99bd2ddd, function (items) {
  if (mudfish_adclean_g_conf_fb373699c515f1ddd0afdfaa99bd2ddd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb373699c515f1ddd0afdfaa99bd2ddd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fb373699c515f1ddd0afdfaa99bd2ddd();
    });
  }
});
