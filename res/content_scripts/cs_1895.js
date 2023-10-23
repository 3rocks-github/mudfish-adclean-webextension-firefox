
function mudfish_adclean_e9622c239d98c0bba646dff71f9d13cc() {
  try {
    Sizzle(`img[src^="athe/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e9622c239d98c0bba646dff71f9d13cc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e9622c239d98c0bba646dff71f9d13cc, function (items) {
  if (mudfish_adclean_g_conf_e9622c239d98c0bba646dff71f9d13cc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e9622c239d98c0bba646dff71f9d13cc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e9622c239d98c0bba646dff71f9d13cc();
    });
  }
});
