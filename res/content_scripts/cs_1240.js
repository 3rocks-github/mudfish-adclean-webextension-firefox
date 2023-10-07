
function mudfish_adclean_ac9f7ccb97d551afd968ce128c367bca() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content > div[style*="width:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ac9f7ccb97d551afd968ce128c367bca();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ac9f7ccb97d551afd968ce128c367bca();
  });
}
