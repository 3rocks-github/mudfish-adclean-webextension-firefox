
function mudfish_adclean_4a8e59ef2b177d684cc27296b6f69002() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-panel-code="SHOP_VOGUE"] ._MM_TREND_PICK`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4a8e59ef2b177d684cc27296b6f69002();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4a8e59ef2b177d684cc27296b6f69002();
  });
}
