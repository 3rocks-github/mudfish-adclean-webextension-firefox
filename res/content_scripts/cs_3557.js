
function mudfish_adclean_39cbf56e297591c7a5a477e67e27d18e() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_39cbf56e297591c7a5a477e67e27d18e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_39cbf56e297591c7a5a477e67e27d18e, function (items) {
  if (mudfish_adclean_g_conf_39cbf56e297591c7a5a477e67e27d18e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_39cbf56e297591c7a5a477e67e27d18e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_39cbf56e297591c7a5a477e67e27d18e();
    });
  }
});
