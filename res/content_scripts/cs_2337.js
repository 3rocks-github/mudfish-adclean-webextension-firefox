
function mudfish_adclean_9faf5d6f28d7e202a75ba56f17a9cc20() {
  try {
    Sizzle(`.gdl-page-item`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9faf5d6f28d7e202a75ba56f17a9cc20 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9faf5d6f28d7e202a75ba56f17a9cc20, function (items) {
  if (mudfish_adclean_g_conf_9faf5d6f28d7e202a75ba56f17a9cc20.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9faf5d6f28d7e202a75ba56f17a9cc20();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
