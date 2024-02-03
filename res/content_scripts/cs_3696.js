
function mudfish_adclean_af3a6aaf413dbe1756cf4a84290d3c22() {
  try {
    Sizzle(`ul[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af3a6aaf413dbe1756cf4a84290d3c22 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af3a6aaf413dbe1756cf4a84290d3c22, function (items) {
  if (mudfish_adclean_g_conf_af3a6aaf413dbe1756cf4a84290d3c22.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af3a6aaf413dbe1756cf4a84290d3c22();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_af3a6aaf413dbe1756cf4a84290d3c22();
    });
  }
});
