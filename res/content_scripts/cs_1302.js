
function mudfish_adclean_8b2c6b8cb38d695a8eadf729e4064dfc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > div[style^="position:fixed;"][style*="z-index:9999"][style*="width:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8b2c6b8cb38d695a8eadf729e4064dfc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8b2c6b8cb38d695a8eadf729e4064dfc();
  });
}
