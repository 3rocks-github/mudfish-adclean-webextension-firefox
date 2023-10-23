
function mudfish_adclean_948dc12b0142938925beec03ada860d4() {
  try {
    Sizzle(`.container .recent_news_inner:has(> h3:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_948dc12b0142938925beec03ada860d4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_948dc12b0142938925beec03ada860d4, function (items) {
  if (mudfish_adclean_g_conf_948dc12b0142938925beec03ada860d4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_948dc12b0142938925beec03ada860d4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_948dc12b0142938925beec03ada860d4();
    });
  }
});
