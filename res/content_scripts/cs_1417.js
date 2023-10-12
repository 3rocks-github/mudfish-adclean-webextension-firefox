
function mudfish_adclean_1b1cb2ed3ab06b7531557cdf1559ccc4() {
  try {
    Sizzle(`div[class*="_ban_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1b1cb2ed3ab06b7531557cdf1559ccc4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1b1cb2ed3ab06b7531557cdf1559ccc4, function (items) {
  if (mudfish_adclean_g_conf_1b1cb2ed3ab06b7531557cdf1559ccc4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1b1cb2ed3ab06b7531557cdf1559ccc4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
