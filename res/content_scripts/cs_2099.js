
function mudfish_adclean_867c7387c81961a4ec62f6f3cd3f1a97() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="float"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_867c7387c81961a4ec62f6f3cd3f1a97();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_867c7387c81961a4ec62f6f3cd3f1a97();
  });
}
