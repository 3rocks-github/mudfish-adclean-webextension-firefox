
function mudfish_adclean_9c440fe237735263ed0cb2ad0289ef28() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.MapMain > #map ~ div[class]:not([id]):not([style])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9c440fe237735263ed0cb2ad0289ef28();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9c440fe237735263ed0cb2ad0289ef28();
  });
}
