
function mudfish_adclean_64ff4f644bc5ffd881554d028e1f463d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style~="padding:10px"][style~="10px;"] > div[style^="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_64ff4f644bc5ffd881554d028e1f463d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_64ff4f644bc5ffd881554d028e1f463d();
  });
}
