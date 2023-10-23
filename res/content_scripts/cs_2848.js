
function mudfish_adclean_8c2aa6ac86aae7951b1dede372c88235() {
  try {
    Sizzle(`.bottomPop`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8c2aa6ac86aae7951b1dede372c88235 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8c2aa6ac86aae7951b1dede372c88235, function (items) {
  if (mudfish_adclean_g_conf_8c2aa6ac86aae7951b1dede372c88235.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8c2aa6ac86aae7951b1dede372c88235();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8c2aa6ac86aae7951b1dede372c88235();
    });
  }
});
