
function mudfish_adclean_2f1956cba47db7738816efca4a225622() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html[class*="pc-size"] .av-area-fot`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2f1956cba47db7738816efca4a225622();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2f1956cba47db7738816efca4a225622();
  });
}
