
function mudfish_adclean_9934b08688bbf2cac5efc01d2683b5d4() {
  try {
    Sizzle(`.headding-news:has(~ div:not([style])#toTop) .col-md-8`).forEach(element => {
      element.style.marginLeft = "calc(50% - 384px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9934b08688bbf2cac5efc01d2683b5d4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9934b08688bbf2cac5efc01d2683b5d4, function (items) {
  if (mudfish_adclean_g_conf_9934b08688bbf2cac5efc01d2683b5d4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9934b08688bbf2cac5efc01d2683b5d4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9934b08688bbf2cac5efc01d2683b5d4();
    });
  }
});
