
function mudfish_adclean_0826f733ba0bf74d2f7a8d25ead341fb() {
  try {
    Sizzle(`a[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0826f733ba0bf74d2f7a8d25ead341fb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0826f733ba0bf74d2f7a8d25ead341fb, function (items) {
  if (mudfish_adclean_g_conf_0826f733ba0bf74d2f7a8d25ead341fb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0826f733ba0bf74d2f7a8d25ead341fb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
