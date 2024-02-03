
function mudfish_adclean_53431c58fb03631e07f4f743f628e9ec() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_53431c58fb03631e07f4f743f628e9ec = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_53431c58fb03631e07f4f743f628e9ec, function (items) {
  if (mudfish_adclean_g_conf_53431c58fb03631e07f4f743f628e9ec.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_53431c58fb03631e07f4f743f628e9ec();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_53431c58fb03631e07f4f743f628e9ec();
    });
  }
});
