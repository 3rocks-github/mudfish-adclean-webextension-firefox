
function mudfish_adclean_5b32e932bda35438edbb1cbaa433fcb6() {
  try {
    Sizzle(`[class*="sponsor"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5b32e932bda35438edbb1cbaa433fcb6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5b32e932bda35438edbb1cbaa433fcb6, function (items) {
  if (mudfish_adclean_g_conf_5b32e932bda35438edbb1cbaa433fcb6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5b32e932bda35438edbb1cbaa433fcb6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
