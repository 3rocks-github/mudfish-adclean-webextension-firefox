
function mudfish_adclean_4a7176e0cdeb77ec226b77d391bf0d69() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.depthContentsWrap .productListWrap .searchList`).forEach(element => {
        element.style.marginTop = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4a7176e0cdeb77ec226b77d391bf0d69();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4a7176e0cdeb77ec226b77d391bf0d69();
  });
}
