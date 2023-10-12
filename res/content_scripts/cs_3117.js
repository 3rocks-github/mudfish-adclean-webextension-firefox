
function mudfish_adclean_00a92fe2db7e6f047fbd77a348f05fc4() {
  try {
    Sizzle(`.productListWrap > #idRecommendWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_00a92fe2db7e6f047fbd77a348f05fc4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_00a92fe2db7e6f047fbd77a348f05fc4, function (items) {
  if (mudfish_adclean_g_conf_00a92fe2db7e6f047fbd77a348f05fc4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_00a92fe2db7e6f047fbd77a348f05fc4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
