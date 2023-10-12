
function mudfish_adclean_022465094c732601c955c30acf8a42b8() {
  try {
    Sizzle(`div[class$="ad_area"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_022465094c732601c955c30acf8a42b8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_022465094c732601c955c30acf8a42b8, function (items) {
  if (mudfish_adclean_g_conf_022465094c732601c955c30acf8a42b8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_022465094c732601c955c30acf8a42b8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
