
function mudfish_adclean_43a6f1796d421217c326f3fd0db37447() {
  try {
    Sizzle(`.wrap > div[id^="AD_MOBILE_VIEW"] ~ div[style^="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_43a6f1796d421217c326f3fd0db37447 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_43a6f1796d421217c326f3fd0db37447, function (items) {
  if (mudfish_adclean_g_conf_43a6f1796d421217c326f3fd0db37447.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_43a6f1796d421217c326f3fd0db37447();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
