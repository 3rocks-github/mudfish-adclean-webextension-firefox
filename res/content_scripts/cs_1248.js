
function mudfish_adclean_2edf8d2f16a7436de7b48e84f6957bf2() {
  try {
    Sizzle(`table[id*="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2edf8d2f16a7436de7b48e84f6957bf2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2edf8d2f16a7436de7b48e84f6957bf2, function (items) {
  if (mudfish_adclean_g_conf_2edf8d2f16a7436de7b48e84f6957bf2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2edf8d2f16a7436de7b48e84f6957bf2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
