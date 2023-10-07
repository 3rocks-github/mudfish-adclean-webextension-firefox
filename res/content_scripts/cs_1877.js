
function mudfish_adclean_9b45b62d86129c368ff07dd38a7f9a56() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="text_ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9b45b62d86129c368ff07dd38a7f9a56();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9b45b62d86129c368ff07dd38a7f9a56();
  });
}
