
function mudfish_adclean_57a6ffebe4a9cce11bb092be2b3e10df() {
  try {
    Sizzle(`.left > .shopping-preview`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_57a6ffebe4a9cce11bb092be2b3e10df = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_57a6ffebe4a9cce11bb092be2b3e10df, function (items) {
  if (mudfish_adclean_g_conf_57a6ffebe4a9cce11bb092be2b3e10df.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_57a6ffebe4a9cce11bb092be2b3e10df();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
