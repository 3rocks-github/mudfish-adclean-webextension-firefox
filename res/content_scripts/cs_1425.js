
function mudfish_adclean_cee5806227b6d87a4a1f7a4426812985() {
  try {
    Sizzle(`.tagdiv-type .best_news_wrap_mo`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cee5806227b6d87a4a1f7a4426812985 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cee5806227b6d87a4a1f7a4426812985, function (items) {
  if (mudfish_adclean_g_conf_cee5806227b6d87a4a1f7a4426812985.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cee5806227b6d87a4a1f7a4426812985();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
