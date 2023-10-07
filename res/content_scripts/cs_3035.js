
function mudfish_adclean_c070ced24a5c25cd47e4b90be2e71171() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#yWelTopMid .yWelTodayBook`).forEach(element => {
        element.style.width = "calc(100% - 240px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c070ced24a5c25cd47e4b90be2e71171();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c070ced24a5c25cd47e4b90be2e71171();
  });
}
