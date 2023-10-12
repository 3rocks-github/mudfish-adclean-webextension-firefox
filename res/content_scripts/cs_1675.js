
function mudfish_adclean_a7118dd2fa48611c79bf6dbc951398b4() {
  try {
    Sizzle(`div[id$="_PlaceHolderContent_divMovieSelection_wrap"][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7118dd2fa48611c79bf6dbc951398b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7118dd2fa48611c79bf6dbc951398b4, function (items) {
  if (mudfish_adclean_g_conf_a7118dd2fa48611c79bf6dbc951398b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7118dd2fa48611c79bf6dbc951398b4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
