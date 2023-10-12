
function mudfish_adclean_5920a5c76cf1ad867a26f75a303a6e95() {
  try {
    Sizzle(`div[data-layout-area*="_AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5920a5c76cf1ad867a26f75a303a6e95 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5920a5c76cf1ad867a26f75a303a6e95, function (items) {
  if (mudfish_adclean_g_conf_5920a5c76cf1ad867a26f75a303a6e95.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5920a5c76cf1ad867a26f75a303a6e95();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
