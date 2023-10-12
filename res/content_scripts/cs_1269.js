
function mudfish_adclean_9790791442ffab84b2dc7e6a797aab17() {
  try {
    Sizzle(`.divAdv`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9790791442ffab84b2dc7e6a797aab17 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9790791442ffab84b2dc7e6a797aab17, function (items) {
  if (mudfish_adclean_g_conf_9790791442ffab84b2dc7e6a797aab17.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9790791442ffab84b2dc7e6a797aab17();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
