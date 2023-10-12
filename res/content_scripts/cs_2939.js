
function mudfish_adclean_b066fa65263fc7fbd01d46ee572e4d5a() {
  try {
    Sizzle(`#layer-popups`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b066fa65263fc7fbd01d46ee572e4d5a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b066fa65263fc7fbd01d46ee572e4d5a, function (items) {
  if (mudfish_adclean_g_conf_b066fa65263fc7fbd01d46ee572e4d5a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b066fa65263fc7fbd01d46ee572e4d5a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
