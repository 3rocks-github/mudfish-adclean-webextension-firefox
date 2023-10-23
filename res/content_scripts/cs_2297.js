
function mudfish_adclean_c3100071c67896ba6e509a3bfecc12a3() {
  try {
    Sizzle(`[class][itemtype*="//schema.org/"] .markdown`).forEach(element => {
      element.style.maxWidth = "100% !important";
element.style.flexBasis = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c3100071c67896ba6e509a3bfecc12a3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c3100071c67896ba6e509a3bfecc12a3, function (items) {
  if (mudfish_adclean_g_conf_c3100071c67896ba6e509a3bfecc12a3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c3100071c67896ba6e509a3bfecc12a3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c3100071c67896ba6e509a3bfecc12a3();
    });
  }
});
