
function mudfish_adclean_1c85a3d10351776427ceb7db30482259() {
  try {
    Sizzle(`.nav-mobile:matches-css(display: none) ~ .base > .main`).forEach(element => {
      element.style.width = "calc(100% - 290px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1c85a3d10351776427ceb7db30482259 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1c85a3d10351776427ceb7db30482259, function (items) {
  if (mudfish_adclean_g_conf_1c85a3d10351776427ceb7db30482259.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1c85a3d10351776427ceb7db30482259();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
