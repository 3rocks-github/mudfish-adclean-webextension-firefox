
function mudfish_adclean_855f4a8464f3ffced7b465e78b59732f() {
  try {
    Sizzle(`.widget-main-box ~ .widget-main-box:has(script[src*="//static.criteo.net/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_855f4a8464f3ffced7b465e78b59732f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_855f4a8464f3ffced7b465e78b59732f, function (items) {
  if (mudfish_adclean_g_conf_855f4a8464f3ffced7b465e78b59732f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_855f4a8464f3ffced7b465e78b59732f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
