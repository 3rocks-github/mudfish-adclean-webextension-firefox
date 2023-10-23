
function mudfish_adclean_7fd908e4583c7f433b89ac57f0488d10() {
  try {
    Sizzle(`.article > span[style] > #hns_mask`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7fd908e4583c7f433b89ac57f0488d10 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7fd908e4583c7f433b89ac57f0488d10, function (items) {
  if (mudfish_adclean_g_conf_7fd908e4583c7f433b89ac57f0488d10.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7fd908e4583c7f433b89ac57f0488d10();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7fd908e4583c7f433b89ac57f0488d10();
    });
  }
});
