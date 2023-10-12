
function mudfish_adclean_f5f68224fe182db85bad876815a78ebe() {
  try {
    Sizzle(`.custom_code.board_top`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f5f68224fe182db85bad876815a78ebe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f5f68224fe182db85bad876815a78ebe, function (items) {
  if (mudfish_adclean_g_conf_f5f68224fe182db85bad876815a78ebe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f5f68224fe182db85bad876815a78ebe();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
