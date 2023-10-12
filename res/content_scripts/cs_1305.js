
function mudfish_adclean_1f53c9a8083d9836eb6911cf4255f90d() {
  try {
    Sizzle(`div[class^="mythiell-mid-container"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f53c9a8083d9836eb6911cf4255f90d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f53c9a8083d9836eb6911cf4255f90d, function (items) {
  if (mudfish_adclean_g_conf_1f53c9a8083d9836eb6911cf4255f90d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f53c9a8083d9836eb6911cf4255f90d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
