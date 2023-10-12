
function mudfish_adclean_c549b92f053a6d57133d82fa3c8e5159() {
  try {
    Sizzle(`iframe[title*="광고"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c549b92f053a6d57133d82fa3c8e5159 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c549b92f053a6d57133d82fa3c8e5159, function (items) {
  if (mudfish_adclean_g_conf_c549b92f053a6d57133d82fa3c8e5159.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c549b92f053a6d57133d82fa3c8e5159();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
