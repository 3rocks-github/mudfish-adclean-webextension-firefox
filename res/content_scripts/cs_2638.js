
function mudfish_adclean_3950b4ef0e9c035b1063a74c1a0239ae() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ins.adsbygoogle`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3950b4ef0e9c035b1063a74c1a0239ae();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3950b4ef0e9c035b1063a74c1a0239ae();
  });
}
