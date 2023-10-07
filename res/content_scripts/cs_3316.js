
function mudfish_adclean_68e766494cfa9a4ae3326fe2cde26417() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.rd_ft > div[style^="margin:"][style*="max-width:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_68e766494cfa9a4ae3326fe2cde26417();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_68e766494cfa9a4ae3326fe2cde26417();
  });
}
