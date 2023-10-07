
function mudfish_adclean_20306e71b3bb6a328f11ec1db16b55e4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style*=" "]#mainLayer`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_20306e71b3bb6a328f11ec1db16b55e4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_20306e71b3bb6a328f11ec1db16b55e4();
  });
}
