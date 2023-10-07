
function mudfish_adclean_365727c31e0b9a5da1d425c0e769dc89() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="/main_contents/main_banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_365727c31e0b9a5da1d425c0e769dc89();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_365727c31e0b9a5da1d425c0e769dc89();
  });
}
