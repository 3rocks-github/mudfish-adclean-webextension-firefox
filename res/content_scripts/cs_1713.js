
function mudfish_adclean_6345fde03ef57c4673a70220de41a2dd() {
  try {
    Sizzle(`aside[id^="ai_widget-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6345fde03ef57c4673a70220de41a2dd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6345fde03ef57c4673a70220de41a2dd, function (items) {
  if (mudfish_adclean_g_conf_6345fde03ef57c4673a70220de41a2dd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6345fde03ef57c4673a70220de41a2dd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
