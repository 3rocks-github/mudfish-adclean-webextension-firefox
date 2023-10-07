
function mudfish_adclean_4fe515a45f16f03827d2d4c6fff727a9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#wrap_cnts td[align="center"]:has(img[src$="_ad.gif"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4fe515a45f16f03827d2d4c6fff727a9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4fe515a45f16f03827d2d4c6fff727a9();
  });
}
