
function mudfish_adclean_91a2d8f57b4236f199e0ee91fe857a3e() {
  try {
    Sizzle(`div[style^="max-width:"].bx-wrapper > div[aria-live="polite"][style].bx-viewport`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_91a2d8f57b4236f199e0ee91fe857a3e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_91a2d8f57b4236f199e0ee91fe857a3e, function (items) {
  if (mudfish_adclean_g_conf_91a2d8f57b4236f199e0ee91fe857a3e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_91a2d8f57b4236f199e0ee91fe857a3e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_91a2d8f57b4236f199e0ee91fe857a3e();
    });
  }
});
