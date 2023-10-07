
function mudfish_adclean_fafe17231e3b02d585ed785afdc57272() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.adsbygoogle`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fafe17231e3b02d585ed785afdc57272();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fafe17231e3b02d585ed785afdc57272();
  });
}
