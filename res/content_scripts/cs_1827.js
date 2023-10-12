
function mudfish_adclean_ddfe38a8a21e921cada36a02dc3e4a9b() {
  try {
    Sizzle(`li.search-product__ad-badge`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ddfe38a8a21e921cada36a02dc3e4a9b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ddfe38a8a21e921cada36a02dc3e4a9b, function (items) {
  if (mudfish_adclean_g_conf_ddfe38a8a21e921cada36a02dc3e4a9b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ddfe38a8a21e921cada36a02dc3e4a9b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
