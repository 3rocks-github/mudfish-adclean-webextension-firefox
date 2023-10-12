
function mudfish_adclean_5b823c333495da65fc48d9e5a0d69667() {
  try {
    Sizzle(`div[class^="search_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5b823c333495da65fc48d9e5a0d69667 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5b823c333495da65fc48d9e5a0d69667, function (items) {
  if (mudfish_adclean_g_conf_5b823c333495da65fc48d9e5a0d69667.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5b823c333495da65fc48d9e5a0d69667();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
