
function mudfish_adclean_aeb0f4a582cbfa3c20bc857561dd1a4d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ct .bbs.ppomppu ul[class^="bbsList_"]:has(.new_sk > a[href*="?id=pmarket&"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aeb0f4a582cbfa3c20bc857561dd1a4d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aeb0f4a582cbfa3c20bc857561dd1a4d();
  });
}
