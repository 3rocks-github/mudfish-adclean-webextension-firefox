
function mudfish_adclean_d6ee1d38471acede30d6fc3f8eedf26f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="adsense_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d6ee1d38471acede30d6fc3f8eedf26f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d6ee1d38471acede30d6fc3f8eedf26f();
  });
}
