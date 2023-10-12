
function mudfish_adclean_3a0dfd663f81d7fa6f7ba9feb5235f44() {
  try {
    Sizzle(`.feed-list-wrap .feed-item-wrap-SPONSORED`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3a0dfd663f81d7fa6f7ba9feb5235f44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3a0dfd663f81d7fa6f7ba9feb5235f44, function (items) {
  if (mudfish_adclean_g_conf_3a0dfd663f81d7fa6f7ba9feb5235f44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3a0dfd663f81d7fa6f7ba9feb5235f44();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
