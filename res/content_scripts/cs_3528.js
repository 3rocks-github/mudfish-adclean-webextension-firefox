
function mudfish_adclean_8d7d5dbd82e71be45f9ce8c7de2d79a8() {
  try {
    Sizzle(`img[src^="/bannerpop/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8d7d5dbd82e71be45f9ce8c7de2d79a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8d7d5dbd82e71be45f9ce8c7de2d79a8, function (items) {
  if (mudfish_adclean_g_conf_8d7d5dbd82e71be45f9ce8c7de2d79a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8d7d5dbd82e71be45f9ce8c7de2d79a8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8d7d5dbd82e71be45f9ce8c7de2d79a8();
    });
  }
});
