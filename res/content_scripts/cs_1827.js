
function mudfish_adclean_ddfe38a8a21e921cada36a02dc3e4a9b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`li.search-product__ad-badge`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ddfe38a8a21e921cada36a02dc3e4a9b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ddfe38a8a21e921cada36a02dc3e4a9b();
  });
}
