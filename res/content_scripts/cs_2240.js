
function mudfish_adclean_5b0d02246f512cc9df84ea8c1beb3329() {
  try {
    Sizzle(`.board_view .related_area`).forEach(element => {
      element.style.height = "300px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5b0d02246f512cc9df84ea8c1beb3329 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5b0d02246f512cc9df84ea8c1beb3329, function (items) {
  if (mudfish_adclean_g_conf_5b0d02246f512cc9df84ea8c1beb3329.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5b0d02246f512cc9df84ea8c1beb3329();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
