
function mudfish_adclean_76e56743e2e57627195981c65629d097() {
  try {
    Sizzle(`.content-preview`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_76e56743e2e57627195981c65629d097 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_76e56743e2e57627195981c65629d097, function (items) {
  if (mudfish_adclean_g_conf_76e56743e2e57627195981c65629d097.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_76e56743e2e57627195981c65629d097();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
