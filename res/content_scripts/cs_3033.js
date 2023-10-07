
function mudfish_adclean_5ae7abf6e9af898be4482fab839cc9f1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#yWelMid .yWelNowBook`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5ae7abf6e9af898be4482fab839cc9f1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5ae7abf6e9af898be4482fab839cc9f1();
  });
}
