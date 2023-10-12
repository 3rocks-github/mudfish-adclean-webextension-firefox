
function mudfish_adclean_2f35d40bc8a842c9c9427954a9b0d969() {
  try {
    Sizzle(`div[class*="border"]:has(> a[href][target*="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2f35d40bc8a842c9c9427954a9b0d969 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2f35d40bc8a842c9c9427954a9b0d969, function (items) {
  if (mudfish_adclean_g_conf_2f35d40bc8a842c9c9427954a9b0d969.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2f35d40bc8a842c9c9427954a9b0d969();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
