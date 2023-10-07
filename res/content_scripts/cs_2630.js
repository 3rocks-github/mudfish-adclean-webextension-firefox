
function mudfish_adclean_4ab6b7d0078279dead3b4b7967a3c37c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.tabad`).forEach(element => {
        element.style.height = "1px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4ab6b7d0078279dead3b4b7967a3c37c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4ab6b7d0078279dead3b4b7967a3c37c();
  });
}
