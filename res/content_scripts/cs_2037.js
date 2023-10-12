
function mudfish_adclean_230a9e91b340130896e1d913a540ad8b() {
  try {
    Sizzle(`div[class^="ab_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_230a9e91b340130896e1d913a540ad8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_230a9e91b340130896e1d913a540ad8b, function (items) {
  if (mudfish_adclean_g_conf_230a9e91b340130896e1d913a540ad8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_230a9e91b340130896e1d913a540ad8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
