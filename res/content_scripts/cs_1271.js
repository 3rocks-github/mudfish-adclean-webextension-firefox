
function mudfish_adclean_af4157ab831686bdb0e9451d2be435ee() {
  try {
    Sizzle(`.price-compare-srch`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af4157ab831686bdb0e9451d2be435ee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af4157ab831686bdb0e9451d2be435ee, function (items) {
  if (mudfish_adclean_g_conf_af4157ab831686bdb0e9451d2be435ee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af4157ab831686bdb0e9451d2be435ee();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
