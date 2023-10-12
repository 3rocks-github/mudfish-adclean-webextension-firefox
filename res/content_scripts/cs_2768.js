
function mudfish_adclean_9eaa1f0052f14f6981caa092d1f2f134() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9eaa1f0052f14f6981caa092d1f2f134 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9eaa1f0052f14f6981caa092d1f2f134, function (items) {
  if (mudfish_adclean_g_conf_9eaa1f0052f14f6981caa092d1f2f134.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9eaa1f0052f14f6981caa092d1f2f134();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
