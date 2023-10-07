
function mudfish_adclean_c730fc65642c179557e0d1246429944b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#Contents > #sideBox > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c730fc65642c179557e0d1246429944b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c730fc65642c179557e0d1246429944b();
  });
}
