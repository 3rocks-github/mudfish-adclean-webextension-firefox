
function mudfish_adclean_b066fa65263fc7fbd01d46ee572e4d5a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#layer-popups`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b066fa65263fc7fbd01d46ee572e4d5a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b066fa65263fc7fbd01d46ee572e4d5a();
  });
}
