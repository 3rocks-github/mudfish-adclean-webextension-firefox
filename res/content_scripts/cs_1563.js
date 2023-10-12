
function mudfish_adclean_22c46e4a128dc4a70518b073b8fc2f16() {
  try {
    Sizzle(`a[target="_blank"][data-href][data-banner-statics]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_22c46e4a128dc4a70518b073b8fc2f16 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_22c46e4a128dc4a70518b073b8fc2f16, function (items) {
  if (mudfish_adclean_g_conf_22c46e4a128dc4a70518b073b8fc2f16.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_22c46e4a128dc4a70518b073b8fc2f16();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
