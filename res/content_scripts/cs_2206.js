
function mudfish_adclean_39816a1da0ba365f56643ccf0ed30d67() {
  try {
    Sizzle(`.content_body > div[class^="lotto_"]`).forEach(element => {
      element.style.filter = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_39816a1da0ba365f56643ccf0ed30d67 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_39816a1da0ba365f56643ccf0ed30d67, function (items) {
  if (mudfish_adclean_g_conf_39816a1da0ba365f56643ccf0ed30d67.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_39816a1da0ba365f56643ccf0ed30d67();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_39816a1da0ba365f56643ccf0ed30d67();
    });
  }
});
