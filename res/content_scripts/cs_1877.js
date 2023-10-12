
function mudfish_adclean_9b45b62d86129c368ff07dd38a7f9a56() {
  try {
    Sizzle(`div[class^="text_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9b45b62d86129c368ff07dd38a7f9a56 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9b45b62d86129c368ff07dd38a7f9a56, function (items) {
  if (mudfish_adclean_g_conf_9b45b62d86129c368ff07dd38a7f9a56.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9b45b62d86129c368ff07dd38a7f9a56();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
