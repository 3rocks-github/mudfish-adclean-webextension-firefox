
function mudfish_adclean_2ce014505a6298f3a865aa5651aca82a() {
  try {
    Sizzle(`a[href][target="_blank"] > img[src^="/data/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2ce014505a6298f3a865aa5651aca82a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2ce014505a6298f3a865aa5651aca82a, function (items) {
  if (mudfish_adclean_g_conf_2ce014505a6298f3a865aa5651aca82a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2ce014505a6298f3a865aa5651aca82a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
