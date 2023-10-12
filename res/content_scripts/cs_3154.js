
function mudfish_adclean_0e57f51500541485ea4ef860925e1055() {
  try {
    Sizzle(`.wid`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e57f51500541485ea4ef860925e1055 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e57f51500541485ea4ef860925e1055, function (items) {
  if (mudfish_adclean_g_conf_0e57f51500541485ea4ef860925e1055.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e57f51500541485ea4ef860925e1055();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
