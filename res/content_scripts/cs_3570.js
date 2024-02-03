
function mudfish_adclean_afc2b42631a85b6b67fea302665e02ef() {
  try {
    Sizzle(`a[onclick*="_boom("] > div[id*="_boom_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_afc2b42631a85b6b67fea302665e02ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_afc2b42631a85b6b67fea302665e02ef, function (items) {
  if (mudfish_adclean_g_conf_afc2b42631a85b6b67fea302665e02ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_afc2b42631a85b6b67fea302665e02ef();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_afc2b42631a85b6b67fea302665e02ef();
    });
  }
});
