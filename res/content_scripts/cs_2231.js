
function mudfish_adclean_79b2f2081ff7638075ac36057e8b21c5() {
  try {
    Sizzle(`.mo-new-header .header .show-ads`).forEach(element => {
      element.style.maxHeight = "54px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_79b2f2081ff7638075ac36057e8b21c5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_79b2f2081ff7638075ac36057e8b21c5, function (items) {
  if (mudfish_adclean_g_conf_79b2f2081ff7638075ac36057e8b21c5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_79b2f2081ff7638075ac36057e8b21c5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
