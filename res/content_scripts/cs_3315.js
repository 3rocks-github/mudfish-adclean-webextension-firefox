
function mudfish_adclean_62ce681b108cc7b8e7ac8b9bcda62f72() {
  try {
    Sizzle(`.powershopping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_62ce681b108cc7b8e7ac8b9bcda62f72 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_62ce681b108cc7b8e7ac8b9bcda62f72, function (items) {
  if (mudfish_adclean_g_conf_62ce681b108cc7b8e7ac8b9bcda62f72.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_62ce681b108cc7b8e7ac8b9bcda62f72();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
