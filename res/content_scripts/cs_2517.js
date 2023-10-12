
function mudfish_adclean_e91e22c752fd0bbbd86f638d887c0419() {
  try {
    Sizzle(`div.banners:has(> a[href*="//ad.everytime.kr/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e91e22c752fd0bbbd86f638d887c0419 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e91e22c752fd0bbbd86f638d887c0419, function (items) {
  if (mudfish_adclean_g_conf_e91e22c752fd0bbbd86f638d887c0419.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e91e22c752fd0bbbd86f638d887c0419();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
