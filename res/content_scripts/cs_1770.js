
function mudfish_adclean_78cc25bb618943a5f14b4dc7138a4551() {
  try {
    Sizzle(`#news_area ~ div[class*="_shopping"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_78cc25bb618943a5f14b4dc7138a4551 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_78cc25bb618943a5f14b4dc7138a4551, function (items) {
  if (mudfish_adclean_g_conf_78cc25bb618943a5f14b4dc7138a4551.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_78cc25bb618943a5f14b4dc7138a4551();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
