
function mudfish_adclean_3e36317839325fa0ba339483a3372009() {
  try {
    Sizzle(`#coupangAd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3e36317839325fa0ba339483a3372009 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3e36317839325fa0ba339483a3372009, function (items) {
  if (mudfish_adclean_g_conf_3e36317839325fa0ba339483a3372009.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3e36317839325fa0ba339483a3372009();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
