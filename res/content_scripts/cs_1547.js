
function mudfish_adclean_1a62cca2e7bdc3fa52a0f3de5d98ea4b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="agnb-"][class^="agnb-"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1a62cca2e7bdc3fa52a0f3de5d98ea4b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1a62cca2e7bdc3fa52a0f3de5d98ea4b();
  });
}
