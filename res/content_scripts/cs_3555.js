
function mudfish_adclean_ea2b9b5356f1bd6d5c582b46b7d28215() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ea2b9b5356f1bd6d5c582b46b7d28215 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ea2b9b5356f1bd6d5c582b46b7d28215, function (items) {
  if (mudfish_adclean_g_conf_ea2b9b5356f1bd6d5c582b46b7d28215.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ea2b9b5356f1bd6d5c582b46b7d28215();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ea2b9b5356f1bd6d5c582b46b7d28215();
    });
  }
});
