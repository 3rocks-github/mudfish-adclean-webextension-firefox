
function mudfish_adclean_ef96dd17fb0ff682028e1a367243f315() {
  try {
    Sizzle(`div[id^="add_view_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef96dd17fb0ff682028e1a367243f315 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef96dd17fb0ff682028e1a367243f315, function (items) {
  if (mudfish_adclean_g_conf_ef96dd17fb0ff682028e1a367243f315.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef96dd17fb0ff682028e1a367243f315();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
