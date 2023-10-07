
function mudfish_adclean_6345fde03ef57c4673a70220de41a2dd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside[id^="ai_widget-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6345fde03ef57c4673a70220de41a2dd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6345fde03ef57c4673a70220de41a2dd();
  });
}
