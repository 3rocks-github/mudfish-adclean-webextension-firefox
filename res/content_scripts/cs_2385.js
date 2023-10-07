
function mudfish_adclean_a2bf0a2d55b6191cd0a2a5cd9165dc34() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#root div[class^="Layout-module__content_"]:has(iframe[src^="https://shopsquare.naver.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a2bf0a2d55b6191cd0a2a5cd9165dc34();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a2bf0a2d55b6191cd0a2a5cd9165dc34();
  });
}
