
function mudfish_adclean_1a62cca2e7bdc3fa52a0f3de5d98ea4b() {
  try {
    Sizzle(`div[id^="agnb-"][class^="agnb-"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a62cca2e7bdc3fa52a0f3de5d98ea4b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a62cca2e7bdc3fa52a0f3de5d98ea4b, function (items) {
  if (mudfish_adclean_g_conf_1a62cca2e7bdc3fa52a0f3de5d98ea4b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a62cca2e7bdc3fa52a0f3de5d98ea4b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1a62cca2e7bdc3fa52a0f3de5d98ea4b();
    });
  }
});
