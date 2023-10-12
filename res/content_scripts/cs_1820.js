
function mudfish_adclean_d52ac2111fb618ed572a744d7f89085c() {
  try {
    Sizzle(`[class^="adsense"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d52ac2111fb618ed572a744d7f89085c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d52ac2111fb618ed572a744d7f89085c, function (items) {
  if (mudfish_adclean_g_conf_d52ac2111fb618ed572a744d7f89085c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d52ac2111fb618ed572a744d7f89085c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
