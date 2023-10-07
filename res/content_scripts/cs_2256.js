
function mudfish_adclean_2acc3b3292584460c8dd68270df1d574() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body[data-elementor-device-mode="desktop"] div[itemprop="mainContentOfPage"]`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2acc3b3292584460c8dd68270df1d574();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2acc3b3292584460c8dd68270df1d574();
  });
}
