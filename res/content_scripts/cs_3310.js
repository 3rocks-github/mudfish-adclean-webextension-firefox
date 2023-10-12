
function mudfish_adclean_1f00431ed1ee178ce5d034930b3c0005() {
  try {
    Sizzle(`div[class*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f00431ed1ee178ce5d034930b3c0005 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f00431ed1ee178ce5d034930b3c0005, function (items) {
  if (mudfish_adclean_g_conf_1f00431ed1ee178ce5d034930b3c0005.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f00431ed1ee178ce5d034930b3c0005();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
