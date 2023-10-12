
function mudfish_adclean_3040fbf41dddd5d2d1d771c14adc5aa6() {
  try {
    Sizzle(`div[class^="powerlink_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3040fbf41dddd5d2d1d771c14adc5aa6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3040fbf41dddd5d2d1d771c14adc5aa6, function (items) {
  if (mudfish_adclean_g_conf_3040fbf41dddd5d2d1d771c14adc5aa6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3040fbf41dddd5d2d1d771c14adc5aa6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
