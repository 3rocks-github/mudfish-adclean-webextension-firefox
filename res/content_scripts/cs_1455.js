
function mudfish_adclean_cbf853d2c5e5cb2fdeee3e5300e73d6b() {
  try {
    Sizzle(`div[id*="_"] div[class][style*="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cbf853d2c5e5cb2fdeee3e5300e73d6b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cbf853d2c5e5cb2fdeee3e5300e73d6b, function (items) {
  if (mudfish_adclean_g_conf_cbf853d2c5e5cb2fdeee3e5300e73d6b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cbf853d2c5e5cb2fdeee3e5300e73d6b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cbf853d2c5e5cb2fdeee3e5300e73d6b();
    });
  }
});
