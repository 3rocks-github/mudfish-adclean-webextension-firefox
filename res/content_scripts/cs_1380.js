
function mudfish_adclean_7cd579873a8ad6d2fa31aaf99c37924c() {
  try {
    Sizzle(`div[class^="ad_"][class*=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7cd579873a8ad6d2fa31aaf99c37924c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7cd579873a8ad6d2fa31aaf99c37924c, function (items) {
  if (mudfish_adclean_g_conf_7cd579873a8ad6d2fa31aaf99c37924c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7cd579873a8ad6d2fa31aaf99c37924c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
