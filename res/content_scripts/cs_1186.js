
function mudfish_adclean_000d597fbf34013767fe7b3bc6b25b3a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="ad-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_000d597fbf34013767fe7b3bc6b25b3a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_000d597fbf34013767fe7b3bc6b25b3a();
  });
}
