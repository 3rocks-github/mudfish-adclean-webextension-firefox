
function mudfish_adclean_3f9e2c06034c799d79a9c6aed422c3a2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="mobileDaNs"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3f9e2c06034c799d79a9c6aed422c3a2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3f9e2c06034c799d79a9c6aed422c3a2();
  });
}
