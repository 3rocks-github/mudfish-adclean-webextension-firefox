
function mudfish_adclean_9b2607c0db4eeb524b6fad0a98ffb71a() {
  try {
    Sizzle(`.topbanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9b2607c0db4eeb524b6fad0a98ffb71a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9b2607c0db4eeb524b6fad0a98ffb71a, function (items) {
  if (mudfish_adclean_g_conf_9b2607c0db4eeb524b6fad0a98ffb71a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9b2607c0db4eeb524b6fad0a98ffb71a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
