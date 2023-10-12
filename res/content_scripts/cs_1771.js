
function mudfish_adclean_0b3ff4bddf2d91cf82b16391d829e4d0() {
  try {
    Sizzle(`#breakingNews.overlay_break`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0b3ff4bddf2d91cf82b16391d829e4d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0b3ff4bddf2d91cf82b16391d829e4d0, function (items) {
  if (mudfish_adclean_g_conf_0b3ff4bddf2d91cf82b16391d829e4d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0b3ff4bddf2d91cf82b16391d829e4d0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
