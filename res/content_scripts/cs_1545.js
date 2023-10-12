
function mudfish_adclean_731d2d763c93c8f4669208da46c41759() {
  try {
    Sizzle(`div[id^="layerPopup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_731d2d763c93c8f4669208da46c41759 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_731d2d763c93c8f4669208da46c41759, function (items) {
  if (mudfish_adclean_g_conf_731d2d763c93c8f4669208da46c41759.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_731d2d763c93c8f4669208da46c41759();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
