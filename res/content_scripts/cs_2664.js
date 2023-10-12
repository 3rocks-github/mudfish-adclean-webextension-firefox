
function mudfish_adclean_1b28225373ac831ecb0b738b82ce0d00() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1b28225373ac831ecb0b738b82ce0d00 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1b28225373ac831ecb0b738b82ce0d00, function (items) {
  if (mudfish_adclean_g_conf_1b28225373ac831ecb0b738b82ce0d00.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1b28225373ac831ecb0b738b82ce0d00();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
