
function mudfish_adclean_cbf853d2c5e5cb2fdeee3e5300e73d6b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="_"] div[class][style*="min-height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cbf853d2c5e5cb2fdeee3e5300e73d6b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cbf853d2c5e5cb2fdeee3e5300e73d6b();
  });
}
