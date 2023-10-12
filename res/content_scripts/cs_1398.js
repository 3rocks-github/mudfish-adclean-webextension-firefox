
function mudfish_adclean_58b2581fd7e29f69c1c6ffbbafd5b6d7() {
  try {
    Sizzle(`a[style*="background-image"][style*="/data/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_58b2581fd7e29f69c1c6ffbbafd5b6d7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_58b2581fd7e29f69c1c6ffbbafd5b6d7, function (items) {
  if (mudfish_adclean_g_conf_58b2581fd7e29f69c1c6ffbbafd5b6d7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_58b2581fd7e29f69c1c6ffbbafd5b6d7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
