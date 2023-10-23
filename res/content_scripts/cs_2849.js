
function mudfish_adclean_64f65f0f6c8fcec93cccaa86937e1897() {
  try {
    Sizzle(`.social-after-title`).forEach(element => {
      element.style.height = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64f65f0f6c8fcec93cccaa86937e1897 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64f65f0f6c8fcec93cccaa86937e1897, function (items) {
  if (mudfish_adclean_g_conf_64f65f0f6c8fcec93cccaa86937e1897.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64f65f0f6c8fcec93cccaa86937e1897();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_64f65f0f6c8fcec93cccaa86937e1897();
    });
  }
});
