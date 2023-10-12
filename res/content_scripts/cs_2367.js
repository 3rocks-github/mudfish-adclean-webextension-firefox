
function mudfish_adclean_47224ddb25a4a2f6a173189f72eb2397() {
  try {
    Sizzle(`.article_area > .article_left`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_47224ddb25a4a2f6a173189f72eb2397 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_47224ddb25a4a2f6a173189f72eb2397, function (items) {
  if (mudfish_adclean_g_conf_47224ddb25a4a2f6a173189f72eb2397.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_47224ddb25a4a2f6a173189f72eb2397();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
