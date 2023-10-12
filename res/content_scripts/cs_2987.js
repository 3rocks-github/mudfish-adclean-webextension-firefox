
function mudfish_adclean_bba55703b007b90352563e67c9fd20e9() {
  try {
    Sizzle(`a[class*="_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bba55703b007b90352563e67c9fd20e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bba55703b007b90352563e67c9fd20e9, function (items) {
  if (mudfish_adclean_g_conf_bba55703b007b90352563e67c9fd20e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bba55703b007b90352563e67c9fd20e9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
