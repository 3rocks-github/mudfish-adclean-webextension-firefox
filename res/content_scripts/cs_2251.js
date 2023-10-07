
function mudfish_adclean_cdcc5eee6455918975b43b12f9bd9073() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.layout-main .panel.no-margin`).forEach(element => {
        element.style.paddingTop = "50px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cdcc5eee6455918975b43b12f9bd9073();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cdcc5eee6455918975b43b12f9bd9073();
  });
}
