
function mudfish_adclean_a58ca3a5898fe07c490efe7f0bfc72bd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.module.module_plugin a[href*="//link.coupang.com/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a58ca3a5898fe07c490efe7f0bfc72bd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a58ca3a5898fe07c490efe7f0bfc72bd();
  });
}
