
function mudfish_adclean_5d19c333b5f6ab4725279ff395a31250() {
  try {
    Sizzle(`div[class^="products_search_list"] div[class^="adProduct_"][id*="lst_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5d19c333b5f6ab4725279ff395a31250 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5d19c333b5f6ab4725279ff395a31250, function (items) {
  if (mudfish_adclean_g_conf_5d19c333b5f6ab4725279ff395a31250.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5d19c333b5f6ab4725279ff395a31250();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5d19c333b5f6ab4725279ff395a31250();
    });
  }
});
