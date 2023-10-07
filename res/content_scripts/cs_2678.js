
function mudfish_adclean_3a1f2a45ae73f6df09669c3baaa29608() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#view_warning .relative:has(ins.adsbygoogle):not([class*="_content"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3a1f2a45ae73f6df09669c3baaa29608();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3a1f2a45ae73f6df09669c3baaa29608();
  });
}
