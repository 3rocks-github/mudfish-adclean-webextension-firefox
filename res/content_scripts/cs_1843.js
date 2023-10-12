
function mudfish_adclean_d6e704447ff6322f3b897c38dce25efb() {
  try {
    Sizzle(`div[class^="styles_Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d6e704447ff6322f3b897c38dce25efb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d6e704447ff6322f3b897c38dce25efb, function (items) {
  if (mudfish_adclean_g_conf_d6e704447ff6322f3b897c38dce25efb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d6e704447ff6322f3b897c38dce25efb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
