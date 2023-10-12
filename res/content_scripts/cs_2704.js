
function mudfish_adclean_a7850ed21f1a4696a25b42687ab5cd3b() {
  try {
    Sizzle(`div[class*="-ad"]:not(.container):not([style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7850ed21f1a4696a25b42687ab5cd3b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7850ed21f1a4696a25b42687ab5cd3b, function (items) {
  if (mudfish_adclean_g_conf_a7850ed21f1a4696a25b42687ab5cd3b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7850ed21f1a4696a25b42687ab5cd3b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
