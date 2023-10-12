
function mudfish_adclean_082fb1ac00ee28338ebcc970a01f96e5() {
  try {
    Sizzle(`.section-intro > .m-latest-renew:has(h3:contains(MD 추천도서))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_082fb1ac00ee28338ebcc970a01f96e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_082fb1ac00ee28338ebcc970a01f96e5, function (items) {
  if (mudfish_adclean_g_conf_082fb1ac00ee28338ebcc970a01f96e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_082fb1ac00ee28338ebcc970a01f96e5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
