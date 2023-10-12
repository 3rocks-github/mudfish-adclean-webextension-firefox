
function mudfish_adclean_713eccfc3e47c098855352a920b89728() {
  try {
    Sizzle(`div[id*="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_713eccfc3e47c098855352a920b89728 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_713eccfc3e47c098855352a920b89728, function (items) {
  if (mudfish_adclean_g_conf_713eccfc3e47c098855352a920b89728.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_713eccfc3e47c098855352a920b89728();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
