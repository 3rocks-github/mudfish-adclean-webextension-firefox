
function mudfish_adclean_ba981e6dade115f7b0cc90aff06351d0() {
  try {
    Sizzle(`div > a[href^="/event?event_id="][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ba981e6dade115f7b0cc90aff06351d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ba981e6dade115f7b0cc90aff06351d0, function (items) {
  if (mudfish_adclean_g_conf_ba981e6dade115f7b0cc90aff06351d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ba981e6dade115f7b0cc90aff06351d0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
