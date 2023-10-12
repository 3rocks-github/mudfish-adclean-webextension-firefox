
function mudfish_adclean_14f587fa28e0209017df130490eb57cb() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_14f587fa28e0209017df130490eb57cb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_14f587fa28e0209017df130490eb57cb, function (items) {
  if (mudfish_adclean_g_conf_14f587fa28e0209017df130490eb57cb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_14f587fa28e0209017df130490eb57cb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
