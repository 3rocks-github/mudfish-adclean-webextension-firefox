
function mudfish_adclean_bdedde6999723e8b022ec8f78d7d512d() {
  try {
    Sizzle(`.content`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bdedde6999723e8b022ec8f78d7d512d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bdedde6999723e8b022ec8f78d7d512d, function (items) {
  if (mudfish_adclean_g_conf_bdedde6999723e8b022ec8f78d7d512d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bdedde6999723e8b022ec8f78d7d512d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
