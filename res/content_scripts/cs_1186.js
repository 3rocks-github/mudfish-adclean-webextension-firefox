
function mudfish_adclean_000d597fbf34013767fe7b3bc6b25b3a() {
  try {
    Sizzle(`div[class*="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_000d597fbf34013767fe7b3bc6b25b3a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_000d597fbf34013767fe7b3bc6b25b3a, function (items) {
  if (mudfish_adclean_g_conf_000d597fbf34013767fe7b3bc6b25b3a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_000d597fbf34013767fe7b3bc6b25b3a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_000d597fbf34013767fe7b3bc6b25b3a();
    });
  }
});
