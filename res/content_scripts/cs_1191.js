
function mudfish_adclean_a14b19cdfe0c75b0f1bf8700e6656535() {
  try {
    Sizzle(`[class*="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a14b19cdfe0c75b0f1bf8700e6656535 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a14b19cdfe0c75b0f1bf8700e6656535, function (items) {
  if (mudfish_adclean_g_conf_a14b19cdfe0c75b0f1bf8700e6656535.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a14b19cdfe0c75b0f1bf8700e6656535();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
