
function mudfish_adclean_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class^="aside-bnr"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37();
  });
}
