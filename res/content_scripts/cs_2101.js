
function mudfish_adclean_7ed181225cf6afab242029cd70bfbfae() {
  try {
    Sizzle(`.at-main > .widget-box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7ed181225cf6afab242029cd70bfbfae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7ed181225cf6afab242029cd70bfbfae, function (items) {
  if (mudfish_adclean_g_conf_7ed181225cf6afab242029cd70bfbfae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7ed181225cf6afab242029cd70bfbfae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
