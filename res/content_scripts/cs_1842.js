
function mudfish_adclean_da7c05c6b6987afc7e2d538c6a3c5cdb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#plugFloatingBannerDiv`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_da7c05c6b6987afc7e2d538c6a3c5cdb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_da7c05c6b6987afc7e2d538c6a3c5cdb();
  });
}
