
function mudfish_adclean_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37() {
  try {
    Sizzle(`[class^="aside-bnr"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37, function (items) {
  if (mudfish_adclean_g_conf_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5c3d9c1c9cbdf6466d8c8a9c5d9b6c37();
    });
  }
});
