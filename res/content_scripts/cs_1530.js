
function mudfish_adclean_065c22a412f6ddc00a6f50078269a72a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside[class^="banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_065c22a412f6ddc00a6f50078269a72a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_065c22a412f6ddc00a6f50078269a72a();
  });
}
