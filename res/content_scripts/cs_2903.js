
function mudfish_adclean_fc5ee4c824d9a348c2a9a3ffe9ca74e5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="-ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fc5ee4c824d9a348c2a9a3ffe9ca74e5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fc5ee4c824d9a348c2a9a3ffe9ca74e5();
  });
}
