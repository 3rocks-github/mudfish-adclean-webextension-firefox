
function mudfish_adclean_1f16a08bc46dffb8547af933c723404b() {
  try {
    Sizzle(`.evt_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f16a08bc46dffb8547af933c723404b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f16a08bc46dffb8547af933c723404b, function (items) {
  if (mudfish_adclean_g_conf_1f16a08bc46dffb8547af933c723404b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f16a08bc46dffb8547af933c723404b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
