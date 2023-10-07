
function mudfish_adclean_1d1d2d4bc7d1864baefc0be6bc457fd3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content-menu + div[class^="css-"][class*=" "]`).forEach(element => {
        element.style.paddingBottom = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1d1d2d4bc7d1864baefc0be6bc457fd3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1d1d2d4bc7d1864baefc0be6bc457fd3();
  });
}
