
function mudfish_adclean_f59539262bb6310040a3a88cb92c621d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[class*="_ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f59539262bb6310040a3a88cb92c621d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f59539262bb6310040a3a88cb92c621d();
  });
}
