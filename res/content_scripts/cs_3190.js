
function mudfish_adclean_d8e0a9aec0e1c8da00409cdf8a72539d() {
  try {
    Sizzle(`.bnt > div[class^="bancol"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d8e0a9aec0e1c8da00409cdf8a72539d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d8e0a9aec0e1c8da00409cdf8a72539d, function (items) {
  if (mudfish_adclean_g_conf_d8e0a9aec0e1c8da00409cdf8a72539d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d8e0a9aec0e1c8da00409cdf8a72539d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
