
function mudfish_adclean_0e217a1e7245e886a50bead10914385b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[width="100%"][height="120"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0e217a1e7245e886a50bead10914385b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0e217a1e7245e886a50bead10914385b();
  });
}
