
function mudfish_adclean_13e944ff65a43b24bef3986b3620c80f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#newsBody`).forEach(element => {
        element.style.height = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_13e944ff65a43b24bef3986b3620c80f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_13e944ff65a43b24bef3986b3620c80f();
  });
}
