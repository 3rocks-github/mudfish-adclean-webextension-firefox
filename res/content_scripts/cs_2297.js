
function mudfish_adclean_c3100071c67896ba6e509a3bfecc12a3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class][itemtype*="//schema.org/"] .markdown`).forEach(element => {
        element.style.maxWidth = "100% !important";
element.style.flexBasis = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c3100071c67896ba6e509a3bfecc12a3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c3100071c67896ba6e509a3bfecc12a3();
  });
}
