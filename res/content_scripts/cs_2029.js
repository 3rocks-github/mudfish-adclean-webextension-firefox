
function mudfish_adclean_3209e0cb075cfac90e040e8c2d8bcce6() {
  try {
    Sizzle(`.header_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3209e0cb075cfac90e040e8c2d8bcce6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3209e0cb075cfac90e040e8c2d8bcce6, function (items) {
  if (mudfish_adclean_g_conf_3209e0cb075cfac90e040e8c2d8bcce6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3209e0cb075cfac90e040e8c2d8bcce6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
