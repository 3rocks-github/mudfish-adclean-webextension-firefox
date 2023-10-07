
function mudfish_adclean_2858a1d8c3db60d454396014a501358d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="ad"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2858a1d8c3db60d454396014a501358d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2858a1d8c3db60d454396014a501358d();
  });
}
