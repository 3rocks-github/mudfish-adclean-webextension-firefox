
function mudfish_adclean_4a8e59ef2b177d684cc27296b6f69002() {
  try {
    Sizzle(`div[data-panel-code="SHOP_VOGUE"] ._MM_TREND_PICK`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4a8e59ef2b177d684cc27296b6f69002 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4a8e59ef2b177d684cc27296b6f69002, function (items) {
  if (mudfish_adclean_g_conf_4a8e59ef2b177d684cc27296b6f69002.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4a8e59ef2b177d684cc27296b6f69002();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
