
function mudfish_adclean_2b0acc375c70342353173d97aa59bafd() {
  try {
    Sizzle(`div[id^="brave_popup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b0acc375c70342353173d97aa59bafd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b0acc375c70342353173d97aa59bafd, function (items) {
  if (mudfish_adclean_g_conf_2b0acc375c70342353173d97aa59bafd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b0acc375c70342353173d97aa59bafd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
