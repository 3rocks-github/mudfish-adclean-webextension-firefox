
function mudfish_adclean_1f53c9a8083d9836eb6911cf4255f90d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="mythiell-mid-container"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1f53c9a8083d9836eb6911cf4255f90d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1f53c9a8083d9836eb6911cf4255f90d();
  });
}
