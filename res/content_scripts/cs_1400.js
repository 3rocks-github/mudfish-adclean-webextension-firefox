
function mudfish_adclean_242334262bf28f97813e282a75e6faef() {
  try {
    Sizzle(`div[id*="_"][style*=" "] ~ div[id][class]:not([id*="_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_242334262bf28f97813e282a75e6faef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_242334262bf28f97813e282a75e6faef, function (items) {
  if (mudfish_adclean_g_conf_242334262bf28f97813e282a75e6faef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_242334262bf28f97813e282a75e6faef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
