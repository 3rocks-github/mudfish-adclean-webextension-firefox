
function mudfish_adclean_76e56743e2e57627195981c65629d097() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content-preview`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_76e56743e2e57627195981c65629d097();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_76e56743e2e57627195981c65629d097();
  });
}
