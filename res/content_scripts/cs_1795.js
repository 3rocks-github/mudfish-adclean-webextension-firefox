
function mudfish_adclean_ca9d018ec7ce21b8e26a00cf8bcf3508() {
  try {
    Sizzle(`iframe[src*="/wp-content/uploads/ads/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ca9d018ec7ce21b8e26a00cf8bcf3508 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ca9d018ec7ce21b8e26a00cf8bcf3508, function (items) {
  if (mudfish_adclean_g_conf_ca9d018ec7ce21b8e26a00cf8bcf3508.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ca9d018ec7ce21b8e26a00cf8bcf3508();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
