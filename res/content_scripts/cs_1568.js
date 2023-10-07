
function mudfish_adclean_09b06b58bcfe68c9f9fcc3451e7d0c69() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class*=" "]#header-standard-container`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_09b06b58bcfe68c9f9fcc3451e7d0c69();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_09b06b58bcfe68c9f9fcc3451e7d0c69();
  });
}
