
function mudfish_adclean_855f4a8464f3ffced7b465e78b59732f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.widget-main-box ~ .widget-main-box:has(script[src*="//static.criteo.net/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_855f4a8464f3ffced7b465e78b59732f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_855f4a8464f3ffced7b465e78b59732f();
  });
}
