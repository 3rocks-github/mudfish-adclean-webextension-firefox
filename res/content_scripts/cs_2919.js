
function mudfish_adclean_7bbf5f09034f26c619fad462e2f433cf() {
  try {
    Sizzle(`.ent_wrapper.slide-vertical-effect .ent_news:not(:has(.ent_prefix:contains(ZZAPFLIX)))`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7bbf5f09034f26c619fad462e2f433cf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7bbf5f09034f26c619fad462e2f433cf, function (items) {
  if (mudfish_adclean_g_conf_7bbf5f09034f26c619fad462e2f433cf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7bbf5f09034f26c619fad462e2f433cf();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
