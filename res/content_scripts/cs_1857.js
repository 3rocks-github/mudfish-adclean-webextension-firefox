
function mudfish_adclean_87920aa2a1917573407706c7cefa5f95() {
  try {
    Sizzle(`#powerClickProductListArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_87920aa2a1917573407706c7cefa5f95 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_87920aa2a1917573407706c7cefa5f95, function (items) {
  if (mudfish_adclean_g_conf_87920aa2a1917573407706c7cefa5f95.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_87920aa2a1917573407706c7cefa5f95();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
