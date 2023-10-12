
function mudfish_adclean_c67cf24f3c9f127402bfbc1b47160f8b() {
  try {
    Sizzle(`._SearchTitlePrdHListAd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c67cf24f3c9f127402bfbc1b47160f8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c67cf24f3c9f127402bfbc1b47160f8b, function (items) {
  if (mudfish_adclean_g_conf_c67cf24f3c9f127402bfbc1b47160f8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c67cf24f3c9f127402bfbc1b47160f8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
