
function mudfish_adclean_8bf130a144fbb56f49d5e8adee3a3fc5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//arca.live/external/callad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8bf130a144fbb56f49d5e8adee3a3fc5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8bf130a144fbb56f49d5e8adee3a3fc5();
  });
}
