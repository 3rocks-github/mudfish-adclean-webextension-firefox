
function mudfish_adclean_90673a225387610843929929a33620e9() {
  try {
    Sizzle(`aside > div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_90673a225387610843929929a33620e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_90673a225387610843929929a33620e9, function (items) {
  if (mudfish_adclean_g_conf_90673a225387610843929929a33620e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_90673a225387610843929929a33620e9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_90673a225387610843929929a33620e9();
    });
  }
});
