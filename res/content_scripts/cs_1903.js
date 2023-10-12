
function mudfish_adclean_91f9a3aa9ad81c00fb9105c3f4488f41() {
  try {
    Sizzle(`div[id^="naverAd"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_91f9a3aa9ad81c00fb9105c3f4488f41 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_91f9a3aa9ad81c00fb9105c3f4488f41, function (items) {
  if (mudfish_adclean_g_conf_91f9a3aa9ad81c00fb9105c3f4488f41.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_91f9a3aa9ad81c00fb9105c3f4488f41();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
