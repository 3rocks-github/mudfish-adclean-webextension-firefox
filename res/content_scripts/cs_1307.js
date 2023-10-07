
function mudfish_adclean_c50324e2f8f5daecf8e14f544863332a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[itemprop="articleBody"] > div[style*="margin-"]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c50324e2f8f5daecf8e14f544863332a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c50324e2f8f5daecf8e14f544863332a();
  });
}
