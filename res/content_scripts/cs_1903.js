
function mudfish_adclean_91f9a3aa9ad81c00fb9105c3f4488f41() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="naverAd"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_91f9a3aa9ad81c00fb9105c3f4488f41();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_91f9a3aa9ad81c00fb9105c3f4488f41();
  });
}
