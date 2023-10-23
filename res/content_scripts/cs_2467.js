
function mudfish_adclean_f69c62bfeb33e0208954af3ee268cf75() {
  try {
    Sizzle(`div[class*=" "]:has(> a[class*=" "][href][target="_blank"] img[src*="/_next/image?url="][src*="%2Fuploads%2Fbanner%2F"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f69c62bfeb33e0208954af3ee268cf75 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f69c62bfeb33e0208954af3ee268cf75, function (items) {
  if (mudfish_adclean_g_conf_f69c62bfeb33e0208954af3ee268cf75.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f69c62bfeb33e0208954af3ee268cf75();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f69c62bfeb33e0208954af3ee268cf75();
    });
  }
});
