
function mudfish_adclean_1e1d31bb9b698f603bb6a4f43b749be0() {
  try {
    Sizzle(`html[class*="mobile"] .list_document li:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1e1d31bb9b698f603bb6a4f43b749be0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1e1d31bb9b698f603bb6a4f43b749be0, function (items) {
  if (mudfish_adclean_g_conf_1e1d31bb9b698f603bb6a4f43b749be0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1e1d31bb9b698f603bb6a4f43b749be0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1e1d31bb9b698f603bb6a4f43b749be0();
    });
  }
});
