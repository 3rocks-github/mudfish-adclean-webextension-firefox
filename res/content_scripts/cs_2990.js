
function mudfish_adclean_75511ca0f3e2f6e1341e819d1e75434b() {
  try {
    Sizzle(`div[class*="_banner--ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_75511ca0f3e2f6e1341e819d1e75434b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_75511ca0f3e2f6e1341e819d1e75434b, function (items) {
  if (mudfish_adclean_g_conf_75511ca0f3e2f6e1341e819d1e75434b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_75511ca0f3e2f6e1341e819d1e75434b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_75511ca0f3e2f6e1341e819d1e75434b();
    });
  }
});
