
function mudfish_adclean_17d4d5bf6c96b1bd4c2af35a4fd33764() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.login_inputbox`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_17d4d5bf6c96b1bd4c2af35a4fd33764();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_17d4d5bf6c96b1bd4c2af35a4fd33764();
  });
}
