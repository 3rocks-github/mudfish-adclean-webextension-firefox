
function mudfish_adclean_8b2c6b8cb38d695a8eadf729e4064dfc() {
  try {
    Sizzle(`body > div[style^="position:fixed;"][style*="z-index:9999"][style*="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8b2c6b8cb38d695a8eadf729e4064dfc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8b2c6b8cb38d695a8eadf729e4064dfc, function (items) {
  if (mudfish_adclean_g_conf_8b2c6b8cb38d695a8eadf729e4064dfc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8b2c6b8cb38d695a8eadf729e4064dfc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8b2c6b8cb38d695a8eadf729e4064dfc();
    });
  }
});
