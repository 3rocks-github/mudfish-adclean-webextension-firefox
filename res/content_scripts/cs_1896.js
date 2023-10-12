
function mudfish_adclean_ac2b61266bf469145756c9018328a64f() {
  try {
    Sizzle(`img[src*="koreapas.com/bbs/data/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ac2b61266bf469145756c9018328a64f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ac2b61266bf469145756c9018328a64f, function (items) {
  if (mudfish_adclean_g_conf_ac2b61266bf469145756c9018328a64f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ac2b61266bf469145756c9018328a64f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
