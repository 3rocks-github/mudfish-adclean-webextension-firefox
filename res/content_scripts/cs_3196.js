
function mudfish_adclean_46df6efae85f16f39e991e6323176e8d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.topBannerWrapper *`).forEach(element => {
        element.style.height = "1px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_46df6efae85f16f39e991e6323176e8d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_46df6efae85f16f39e991e6323176e8d();
  });
}
