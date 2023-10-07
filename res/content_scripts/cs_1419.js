
function mudfish_adclean_4df84277cc00a5f0384f2d5e29e3f7ac() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-tiara-layer="ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4df84277cc00a5f0384f2d5e29e3f7ac();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4df84277cc00a5f0384f2d5e29e3f7ac();
  });
}
