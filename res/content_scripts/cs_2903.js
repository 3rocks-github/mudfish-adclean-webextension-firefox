
function mudfish_adclean_fc5ee4c824d9a348c2a9a3ffe9ca74e5() {
  try {
    Sizzle(`div[id$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fc5ee4c824d9a348c2a9a3ffe9ca74e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fc5ee4c824d9a348c2a9a3ffe9ca74e5, function (items) {
  if (mudfish_adclean_g_conf_fc5ee4c824d9a348c2a9a3ffe9ca74e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fc5ee4c824d9a348c2a9a3ffe9ca74e5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
