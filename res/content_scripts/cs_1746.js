
function mudfish_adclean_93313fe38f46ef5bdf5f068d02954259() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table.adsbygoogle ~ table[style^="min-height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_93313fe38f46ef5bdf5f068d02954259();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_93313fe38f46ef5bdf5f068d02954259();
  });
}
