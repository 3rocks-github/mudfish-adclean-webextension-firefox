
function mudfish_adclean_81e2104625c055f0edd82eb1f563c315() {
  try {
    Sizzle(`style + a[href*="//"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_81e2104625c055f0edd82eb1f563c315 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_81e2104625c055f0edd82eb1f563c315, function (items) {
  if (mudfish_adclean_g_conf_81e2104625c055f0edd82eb1f563c315.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_81e2104625c055f0edd82eb1f563c315();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
