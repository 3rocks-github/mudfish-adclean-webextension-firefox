
function mudfish_adclean_3daff5e900c0f2fc455aecc843f1fa55() {
  try {
    Sizzle(`div[id*="_adsense_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3daff5e900c0f2fc455aecc843f1fa55 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3daff5e900c0f2fc455aecc843f1fa55, function (items) {
  if (mudfish_adclean_g_conf_3daff5e900c0f2fc455aecc843f1fa55.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3daff5e900c0f2fc455aecc843f1fa55();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3daff5e900c0f2fc455aecc843f1fa55();
    });
  }
});
