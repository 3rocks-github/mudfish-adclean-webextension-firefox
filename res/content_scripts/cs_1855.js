
function mudfish_adclean_4dcfd3c1221f50a440e72c5f271c7ffe() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="topAd"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4dcfd3c1221f50a440e72c5f271c7ffe();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4dcfd3c1221f50a440e72c5f271c7ffe();
  });
}
