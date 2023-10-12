
function mudfish_adclean_8add8918fce987bc3371b27dcce6998d() {
  try {
    Sizzle(`a[href*="./bbs/banner_link.php?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8add8918fce987bc3371b27dcce6998d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8add8918fce987bc3371b27dcce6998d, function (items) {
  if (mudfish_adclean_g_conf_8add8918fce987bc3371b27dcce6998d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8add8918fce987bc3371b27dcce6998d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
