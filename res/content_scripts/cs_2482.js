
function mudfish_adclean_9222b41668b509cad541c3d7e854ac37() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.row > div[class^="col-xs-"]:not([id]):has(#focus-area > div[id^="div-gpt-ad-"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9222b41668b509cad541c3d7e854ac37();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9222b41668b509cad541c3d7e854ac37();
  });
}
