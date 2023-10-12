
function mudfish_adclean_a7311d033a153fd33809ebe7d8852de8() {
  try {
    Sizzle(`#content > .article > div[class][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7311d033a153fd33809ebe7d8852de8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7311d033a153fd33809ebe7d8852de8, function (items) {
  if (mudfish_adclean_g_conf_a7311d033a153fd33809ebe7d8852de8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7311d033a153fd33809ebe7d8852de8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
