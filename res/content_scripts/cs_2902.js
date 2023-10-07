
function mudfish_adclean_ae939a1ad10e63d0531ea5f8e5bf1fa7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="_ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ae939a1ad10e63d0531ea5f8e5bf1fa7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ae939a1ad10e63d0531ea5f8e5bf1fa7();
  });
}
