
function mudfish_adclean_aeb0f4a582cbfa3c20bc857561dd1a4d() {
  try {
    Sizzle(`.ct .bbs.ppomppu ul[class^="bbsList_"]:has(.new_sk > a[href*="?id=pmarket&"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aeb0f4a582cbfa3c20bc857561dd1a4d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aeb0f4a582cbfa3c20bc857561dd1a4d, function (items) {
  if (mudfish_adclean_g_conf_aeb0f4a582cbfa3c20bc857561dd1a4d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aeb0f4a582cbfa3c20bc857561dd1a4d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
