
function mudfish_adclean_46df6efae85f16f39e991e6323176e8d() {
  try {
    Sizzle(`.topBannerWrapper *`).forEach(element => {
      element.style.height = "1px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46df6efae85f16f39e991e6323176e8d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46df6efae85f16f39e991e6323176e8d, function (items) {
  if (mudfish_adclean_g_conf_46df6efae85f16f39e991e6323176e8d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46df6efae85f16f39e991e6323176e8d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_46df6efae85f16f39e991e6323176e8d();
    });
  }
});
