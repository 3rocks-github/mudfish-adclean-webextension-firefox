
function mudfish_adclean_731cbea1fa74bebdbb5b071f1ece058d() {
  try {
    Sizzle(`.ask_wrapper .ask_title_zone`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_731cbea1fa74bebdbb5b071f1ece058d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_731cbea1fa74bebdbb5b071f1ece058d, function (items) {
  if (mudfish_adclean_g_conf_731cbea1fa74bebdbb5b071f1ece058d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_731cbea1fa74bebdbb5b071f1ece058d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
