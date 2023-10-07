
function mudfish_adclean_fb1d09b222cc80f120efca888ba82721() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div.article ~ aside#sidebar:has(.facebook_like:matches-css(display: none))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fb1d09b222cc80f120efca888ba82721();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fb1d09b222cc80f120efca888ba82721();
  });
}
