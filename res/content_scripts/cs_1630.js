
function mudfish_adclean_3f95ae4557ad02e56e53da53c8f9d249() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ezmob-footer`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3f95ae4557ad02e56e53da53c8f9d249();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3f95ae4557ad02e56e53da53c8f9d249();
  });
}
