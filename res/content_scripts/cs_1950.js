
function mudfish_adclean_5e7b903fbc317942e944792659e61a40() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="gg_"], div[class$="_gg"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5e7b903fbc317942e944792659e61a40();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5e7b903fbc317942e944792659e61a40();
  });
}
