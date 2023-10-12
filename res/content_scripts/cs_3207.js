
function mudfish_adclean_3f04f75fbbff64f67bba8aaaeac3270e() {
  try {
    Sizzle(`ul[class] > li:has(> a[href*="tokkiweb.com"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f04f75fbbff64f67bba8aaaeac3270e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f04f75fbbff64f67bba8aaaeac3270e, function (items) {
  if (mudfish_adclean_g_conf_3f04f75fbbff64f67bba8aaaeac3270e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f04f75fbbff64f67bba8aaaeac3270e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
