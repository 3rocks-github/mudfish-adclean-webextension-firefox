
function mudfish_adclean_1e1d31bb9b698f603bb6a4f43b749be0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html[class*="mobile"] .list_document li:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1e1d31bb9b698f603bb6a4f43b749be0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1e1d31bb9b698f603bb6a4f43b749be0();
  });
}
