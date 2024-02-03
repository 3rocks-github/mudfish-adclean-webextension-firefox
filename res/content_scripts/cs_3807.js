
function mudfish_adclean_20f28a1cbd5b12f1f94f3b44f3c53d76() {
  try {
    Sizzle(`a[href^="/ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_20f28a1cbd5b12f1f94f3b44f3c53d76 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_20f28a1cbd5b12f1f94f3b44f3c53d76, function (items) {
  if (mudfish_adclean_g_conf_20f28a1cbd5b12f1f94f3b44f3c53d76.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_20f28a1cbd5b12f1f94f3b44f3c53d76();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_20f28a1cbd5b12f1f94f3b44f3c53d76();
    });
  }
});
