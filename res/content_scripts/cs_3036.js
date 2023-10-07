
function mudfish_adclean_6ff16f7db969146abd8b69cb06ad5c08() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#yWelTopMid .yWelTodayBook .tBCont .tBInfo .tb_readCon`).forEach(element => {
        element.style.width = "calc(100% - 30px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6ff16f7db969146abd8b69cb06ad5c08();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6ff16f7db969146abd8b69cb06ad5c08();
  });
}
