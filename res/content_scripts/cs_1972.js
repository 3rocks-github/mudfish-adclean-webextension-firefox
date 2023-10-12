
function mudfish_adclean_3fd7944b3f0d1260466e54d213a91df9() {
  try {
    Sizzle(`article.cutin-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3fd7944b3f0d1260466e54d213a91df9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3fd7944b3f0d1260466e54d213a91df9, function (items) {
  if (mudfish_adclean_g_conf_3fd7944b3f0d1260466e54d213a91df9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3fd7944b3f0d1260466e54d213a91df9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
