
function mudfish_adclean_577973d1b1be9e4552ca26e983ed196f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sdp-bottom-banner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_577973d1b1be9e4552ca26e983ed196f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_577973d1b1be9e4552ca26e983ed196f();
  });
}
