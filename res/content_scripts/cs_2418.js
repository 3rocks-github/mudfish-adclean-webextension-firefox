
function mudfish_adclean_7bb1441112bc3ea6ce73bbf3fa7a00e5() {
  try {
    Sizzle(`table[align] table[border] table[align]:has(td[align] img[alt="검색광고"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7bb1441112bc3ea6ce73bbf3fa7a00e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7bb1441112bc3ea6ce73bbf3fa7a00e5, function (items) {
  if (mudfish_adclean_g_conf_7bb1441112bc3ea6ce73bbf3fa7a00e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7bb1441112bc3ea6ce73bbf3fa7a00e5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
