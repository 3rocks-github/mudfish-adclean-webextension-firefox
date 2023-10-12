
function mudfish_adclean_99f498599e088c15ef3b05b2fff1e4c8() {
  try {
    Sizzle(`.widget-box > div[style*="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99f498599e088c15ef3b05b2fff1e4c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99f498599e088c15ef3b05b2fff1e4c8, function (items) {
  if (mudfish_adclean_g_conf_99f498599e088c15ef3b05b2fff1e4c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99f498599e088c15ef3b05b2fff1e4c8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
