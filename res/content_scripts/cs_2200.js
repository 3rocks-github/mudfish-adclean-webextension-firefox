
function mudfish_adclean_e55d87c1dd9ada453973471677358131() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.download_ad`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e55d87c1dd9ada453973471677358131();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e55d87c1dd9ada453973471677358131();
  });
}
