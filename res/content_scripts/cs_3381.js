
function mudfish_adclean_7c1c61b8b1910a9b88e4a78a32d09510() {
  try {
    Sizzle(`.at-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7c1c61b8b1910a9b88e4a78a32d09510 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7c1c61b8b1910a9b88e4a78a32d09510, function (items) {
  if (mudfish_adclean_g_conf_7c1c61b8b1910a9b88e4a78a32d09510.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7c1c61b8b1910a9b88e4a78a32d09510();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
