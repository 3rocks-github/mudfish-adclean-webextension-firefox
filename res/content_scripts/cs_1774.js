
function mudfish_adclean_ba981e6dade115f7b0cc90aff06351d0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div > a[href^="/event?event_id="][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ba981e6dade115f7b0cc90aff06351d0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ba981e6dade115f7b0cc90aff06351d0();
  });
}
