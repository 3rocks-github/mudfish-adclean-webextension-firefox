
function mudfish_adclean_a91efa895d84dcc2dc961a848274b83d() {
  try {
    Sizzle(`.grid-body.g-body`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a91efa895d84dcc2dc961a848274b83d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a91efa895d84dcc2dc961a848274b83d, function (items) {
  if (mudfish_adclean_g_conf_a91efa895d84dcc2dc961a848274b83d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a91efa895d84dcc2dc961a848274b83d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
