
function mudfish_adclean_1b1681a55d89d78f0e80b4776bfcb690() {
  try {
    Sizzle(`.googleAd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1b1681a55d89d78f0e80b4776bfcb690 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1b1681a55d89d78f0e80b4776bfcb690, function (items) {
  if (mudfish_adclean_g_conf_1b1681a55d89d78f0e80b4776bfcb690.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1b1681a55d89d78f0e80b4776bfcb690();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
