
function mudfish_adclean_9934b08688bbf2cac5efc01d2683b5d4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.headding-news:has(~ div:not([style])#toTop) .col-md-8`).forEach(element => {
        element.style.marginLeft = "calc(50% - 384px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9934b08688bbf2cac5efc01d2683b5d4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9934b08688bbf2cac5efc01d2683b5d4();
  });
}
