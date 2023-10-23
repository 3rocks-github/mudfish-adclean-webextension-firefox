
function mudfish_adclean_6bab165d1e3b7f0a30c0307126c79710() {
  try {
    Sizzle(`div[class*="mall_"][style*=" "][class*="_slider_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6bab165d1e3b7f0a30c0307126c79710 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6bab165d1e3b7f0a30c0307126c79710, function (items) {
  if (mudfish_adclean_g_conf_6bab165d1e3b7f0a30c0307126c79710.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6bab165d1e3b7f0a30c0307126c79710();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6bab165d1e3b7f0a30c0307126c79710();
    });
  }
});
