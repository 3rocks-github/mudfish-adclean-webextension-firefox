
function mudfish_adclean_4df84277cc00a5f0384f2d5e29e3f7ac() {
  try {
    Sizzle(`div[data-tiara-layer="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4df84277cc00a5f0384f2d5e29e3f7ac = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4df84277cc00a5f0384f2d5e29e3f7ac, function (items) {
  if (mudfish_adclean_g_conf_4df84277cc00a5f0384f2d5e29e3f7ac.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4df84277cc00a5f0384f2d5e29e3f7ac();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
