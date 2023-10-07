
function mudfish_adclean_5d19c333b5f6ab4725279ff395a31250() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="products_search_list"] div[class^="adProduct_"][id*="lst_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5d19c333b5f6ab4725279ff395a31250();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5d19c333b5f6ab4725279ff395a31250();
  });
}
