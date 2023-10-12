
function mudfish_adclean_5e6a7751ef9a6a1292802c342ad66203() {
  try {
    Sizzle(`.productListWrap > #serviceKeywordId`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5e6a7751ef9a6a1292802c342ad66203 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5e6a7751ef9a6a1292802c342ad66203, function (items) {
  if (mudfish_adclean_g_conf_5e6a7751ef9a6a1292802c342ad66203.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5e6a7751ef9a6a1292802c342ad66203();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
