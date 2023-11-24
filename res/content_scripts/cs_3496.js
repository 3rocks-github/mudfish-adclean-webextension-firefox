
function mudfish_adclean_2418a70b77a24b66f6ef1299bf367bca() {
  try {
    Sizzle(`.post_content > div[data-dest="placeholder"][style^="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2418a70b77a24b66f6ef1299bf367bca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2418a70b77a24b66f6ef1299bf367bca, function (items) {
  if (mudfish_adclean_g_conf_2418a70b77a24b66f6ef1299bf367bca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2418a70b77a24b66f6ef1299bf367bca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2418a70b77a24b66f6ef1299bf367bca();
    });
  }
});
