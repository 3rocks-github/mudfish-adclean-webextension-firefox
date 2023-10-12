
function mudfish_adclean_0cd01fe7ae3703348e0e95b7ac89275c() {
  try {
    Sizzle(`center > div[style*="background-color:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0cd01fe7ae3703348e0e95b7ac89275c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0cd01fe7ae3703348e0e95b7ac89275c, function (items) {
  if (mudfish_adclean_g_conf_0cd01fe7ae3703348e0e95b7ac89275c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0cd01fe7ae3703348e0e95b7ac89275c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
