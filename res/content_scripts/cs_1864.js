
function mudfish_adclean_07939c950729f253c8ea663f2dcaada0() {
  try {
    Sizzle(`div[class^="new_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_07939c950729f253c8ea663f2dcaada0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_07939c950729f253c8ea663f2dcaada0, function (items) {
  if (mudfish_adclean_g_conf_07939c950729f253c8ea663f2dcaada0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_07939c950729f253c8ea663f2dcaada0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
