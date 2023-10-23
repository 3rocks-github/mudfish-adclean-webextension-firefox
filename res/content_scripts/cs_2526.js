
function mudfish_adclean_bbdedb785779fb23120f547a76c49907() {
  try {
    Sizzle(`div[id][class][style]:has(> .impactify-player-container)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bbdedb785779fb23120f547a76c49907 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bbdedb785779fb23120f547a76c49907, function (items) {
  if (mudfish_adclean_g_conf_bbdedb785779fb23120f547a76c49907.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bbdedb785779fb23120f547a76c49907();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bbdedb785779fb23120f547a76c49907();
    });
  }
});
