
function mudfish_adclean_6bab165d1e3b7f0a30c0307126c79710() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="mall_"][style*=" "][class*="_slider_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6bab165d1e3b7f0a30c0307126c79710();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6bab165d1e3b7f0a30c0307126c79710();
  });
}
