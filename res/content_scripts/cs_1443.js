
function mudfish_adclean_e7795759d87fea40ee76502b1531be37() {
  try {
    Sizzle(`.section__main-inner > .box__promotion .box__item > *`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7795759d87fea40ee76502b1531be37 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7795759d87fea40ee76502b1531be37, function (items) {
  if (mudfish_adclean_g_conf_e7795759d87fea40ee76502b1531be37.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7795759d87fea40ee76502b1531be37();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
