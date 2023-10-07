
function mudfish_adclean_6ed32ed993c0a36a718e2aefe057a6ca() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.primiumList`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6ed32ed993c0a36a718e2aefe057a6ca();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6ed32ed993c0a36a718e2aefe057a6ca();
  });
}
