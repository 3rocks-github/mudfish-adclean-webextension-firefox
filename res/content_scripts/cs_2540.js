
function mudfish_adclean_1a182238459a0e7e1e9e5f2a911fb6b2() {
  try {
    Sizzle(`#board_top > div > .top_best.best_list:has(+ .col div[id^="ad_"])`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a182238459a0e7e1e9e5f2a911fb6b2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a182238459a0e7e1e9e5f2a911fb6b2, function (items) {
  if (mudfish_adclean_g_conf_1a182238459a0e7e1e9e5f2a911fb6b2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a182238459a0e7e1e9e5f2a911fb6b2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
