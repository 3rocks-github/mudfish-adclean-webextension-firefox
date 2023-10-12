
function mudfish_adclean_67462de13b1ec0850aa72e5d82cb1c8b() {
  try {
    Sizzle(`.ads`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_67462de13b1ec0850aa72e5d82cb1c8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_67462de13b1ec0850aa72e5d82cb1c8b, function (items) {
  if (mudfish_adclean_g_conf_67462de13b1ec0850aa72e5d82cb1c8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_67462de13b1ec0850aa72e5d82cb1c8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
