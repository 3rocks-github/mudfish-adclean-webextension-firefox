
function mudfish_adclean_bb21b3a5149f7bb742ede20a28e8f562() {
  try {
    Sizzle(`div[class*="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb21b3a5149f7bb742ede20a28e8f562 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb21b3a5149f7bb742ede20a28e8f562, function (items) {
  if (mudfish_adclean_g_conf_bb21b3a5149f7bb742ede20a28e8f562.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb21b3a5149f7bb742ede20a28e8f562();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
