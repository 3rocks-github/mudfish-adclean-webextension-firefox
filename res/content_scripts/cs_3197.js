
function mudfish_adclean_4a7176e0cdeb77ec226b77d391bf0d69() {
  try {
    Sizzle(`.depthContentsWrap .productListWrap .searchList`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4a7176e0cdeb77ec226b77d391bf0d69 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4a7176e0cdeb77ec226b77d391bf0d69, function (items) {
  if (mudfish_adclean_g_conf_4a7176e0cdeb77ec226b77d391bf0d69.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4a7176e0cdeb77ec226b77d391bf0d69();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
