
function mudfish_adclean_1a43323660d01ef783722675086849dd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="main"]#middle_area .academy.fleft:not(.iyua)`).forEach(element => {
        element.style.marginLeft = "calc(11.5%) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1a43323660d01ef783722675086849dd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1a43323660d01ef783722675086849dd();
  });
}
