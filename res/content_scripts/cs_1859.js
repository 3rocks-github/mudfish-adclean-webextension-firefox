
function mudfish_adclean_8ec95312bf777484ca36d1800b86cd62() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8ec95312bf777484ca36d1800b86cd62();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8ec95312bf777484ca36d1800b86cd62();
  });
}
