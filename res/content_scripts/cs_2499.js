
function mudfish_adclean_fb1d09b222cc80f120efca888ba82721() {
  try {
    Sizzle(`div.article ~ aside#sidebar:has(.facebook_like:matches-css(display: none))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb1d09b222cc80f120efca888ba82721 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb1d09b222cc80f120efca888ba82721, function (items) {
  if (mudfish_adclean_g_conf_fb1d09b222cc80f120efca888ba82721.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb1d09b222cc80f120efca888ba82721();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
