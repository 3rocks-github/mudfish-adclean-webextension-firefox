
function mudfish_adclean_3daff5e900c0f2fc455aecc843f1fa55() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="_adsense_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3daff5e900c0f2fc455aecc843f1fa55();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3daff5e900c0f2fc455aecc843f1fa55();
  });
}
