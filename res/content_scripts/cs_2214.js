
function mudfish_adclean_42ae31da6488613000e62a07873905f4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#topSearchWrap`).forEach(element => {
        element.style.paddingBottom = "50px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_42ae31da6488613000e62a07873905f4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_42ae31da6488613000e62a07873905f4();
  });
}
