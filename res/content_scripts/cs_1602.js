
function mudfish_adclean_91a2d8f57b4236f199e0ee91fe857a3e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style^="max-width:"].bx-wrapper > div[aria-live="polite"][style].bx-viewport`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_91a2d8f57b4236f199e0ee91fe857a3e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_91a2d8f57b4236f199e0ee91fe857a3e();
  });
}
