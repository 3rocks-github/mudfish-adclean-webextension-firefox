
function mudfish_adclean_1551eefca2021b1d6a44be45925b2c14() {
  try {
    Sizzle(`div[class^="layout__article-header"] > div[class^="flex-chain-wrapper"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1551eefca2021b1d6a44be45925b2c14 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1551eefca2021b1d6a44be45925b2c14, function (items) {
  if (mudfish_adclean_g_conf_1551eefca2021b1d6a44be45925b2c14.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1551eefca2021b1d6a44be45925b2c14();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
