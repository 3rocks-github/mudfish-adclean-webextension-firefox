
function mudfish_adclean_803f5ad07c5746c7516360e42c1f398c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class][itemtype*="//schema.org/"] > .right`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_803f5ad07c5746c7516360e42c1f398c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_803f5ad07c5746c7516360e42c1f398c();
  });
}
