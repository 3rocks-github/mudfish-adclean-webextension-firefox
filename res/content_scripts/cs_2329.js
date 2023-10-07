
function mudfish_adclean_31e7bb3d1029d572eb1d2c26efb07cad() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html[class*="pc-size"] .m-contents > .side-area > div:nth-child(-n+4)`).forEach(element => {
        element.style.top = "auto !important";
element.style.left = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_31e7bb3d1029d572eb1d2c26efb07cad();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_31e7bb3d1029d572eb1d2c26efb07cad();
  });
}
