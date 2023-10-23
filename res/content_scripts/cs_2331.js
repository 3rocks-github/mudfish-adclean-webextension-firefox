
function mudfish_adclean_2f1956cba47db7738816efca4a225622() {
  try {
    Sizzle(`html[class*="pc-size"] .av-area-fot`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2f1956cba47db7738816efca4a225622 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2f1956cba47db7738816efca4a225622, function (items) {
  if (mudfish_adclean_g_conf_2f1956cba47db7738816efca4a225622.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2f1956cba47db7738816efca4a225622();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2f1956cba47db7738816efca4a225622();
    });
  }
});
