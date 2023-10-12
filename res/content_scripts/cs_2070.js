
function mudfish_adclean_4dad3a1661eb532a6593d1da7427bdc7() {
  try {
    Sizzle(`div[class^="banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4dad3a1661eb532a6593d1da7427bdc7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4dad3a1661eb532a6593d1da7427bdc7, function (items) {
  if (mudfish_adclean_g_conf_4dad3a1661eb532a6593d1da7427bdc7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4dad3a1661eb532a6593d1da7427bdc7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
