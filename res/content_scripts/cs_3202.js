
function mudfish_adclean_ce768d87c8177ec96a6317a734ba5064() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header`).forEach(element => {
        element.style.top = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ce768d87c8177ec96a6317a734ba5064();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ce768d87c8177ec96a6317a734ba5064();
  });
}
