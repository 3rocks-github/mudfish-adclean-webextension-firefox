
function mudfish_adclean_0033cceedfcd6e92509eaded7aadd2b8() {
  try {
    Sizzle(`.basic-banner.row.row-10`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0033cceedfcd6e92509eaded7aadd2b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0033cceedfcd6e92509eaded7aadd2b8, function (items) {
  if (mudfish_adclean_g_conf_0033cceedfcd6e92509eaded7aadd2b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0033cceedfcd6e92509eaded7aadd2b8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
