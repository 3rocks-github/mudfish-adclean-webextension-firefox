
function mudfish_adclean_8e7e6cdf66161965f246b4c2c10ced70() {
  try {
    Sizzle(`[class*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8e7e6cdf66161965f246b4c2c10ced70 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8e7e6cdf66161965f246b4c2c10ced70, function (items) {
  if (mudfish_adclean_g_conf_8e7e6cdf66161965f246b4c2c10ced70.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8e7e6cdf66161965f246b4c2c10ced70();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
