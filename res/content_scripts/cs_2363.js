
function mudfish_adclean_0aa2c22cc202ea2adda51451e55b363e() {
  try {
    Sizzle(`#banner, .modal-backdrop`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0aa2c22cc202ea2adda51451e55b363e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0aa2c22cc202ea2adda51451e55b363e, function (items) {
  if (mudfish_adclean_g_conf_0aa2c22cc202ea2adda51451e55b363e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0aa2c22cc202ea2adda51451e55b363e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
