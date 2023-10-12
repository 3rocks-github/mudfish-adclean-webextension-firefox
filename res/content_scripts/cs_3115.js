
function mudfish_adclean_7300e1167d7eebf732616bf13f5d59e8() {
  try {
    Sizzle(`.productListWrapper > .loadWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7300e1167d7eebf732616bf13f5d59e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7300e1167d7eebf732616bf13f5d59e8, function (items) {
  if (mudfish_adclean_g_conf_7300e1167d7eebf732616bf13f5d59e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7300e1167d7eebf732616bf13f5d59e8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
