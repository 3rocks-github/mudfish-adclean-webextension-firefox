
function mudfish_adclean_d9c03fad25f4761ba93368e4ed7bed24() {
  try {
    Sizzle(`.news_synthesis_sec .col.col_4`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d9c03fad25f4761ba93368e4ed7bed24 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d9c03fad25f4761ba93368e4ed7bed24, function (items) {
  if (mudfish_adclean_g_conf_d9c03fad25f4761ba93368e4ed7bed24.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d9c03fad25f4761ba93368e4ed7bed24();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
