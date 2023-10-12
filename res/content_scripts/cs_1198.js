
function mudfish_adclean_e3066a985c0a76394bf266c491c0552d() {
  try {
    Sizzle(`a[class*="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e3066a985c0a76394bf266c491c0552d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e3066a985c0a76394bf266c491c0552d, function (items) {
  if (mudfish_adclean_g_conf_e3066a985c0a76394bf266c491c0552d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e3066a985c0a76394bf266c491c0552d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
