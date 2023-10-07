
function mudfish_adclean_cd0eb98dd25d273edfd656fd9625d63e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container aside[class^="aside-"]:has(ul[id^="ad"], iframe:matches-css(display: none))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cd0eb98dd25d273edfd656fd9625d63e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cd0eb98dd25d273edfd656fd9625d63e();
  });
}
