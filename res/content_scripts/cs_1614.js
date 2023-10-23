
function mudfish_adclean_26841df4a25854a715eda3f7b3bb5ef2() {
  try {
    Sizzle(`div[style] > a[href][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_26841df4a25854a715eda3f7b3bb5ef2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_26841df4a25854a715eda3f7b3bb5ef2, function (items) {
  if (mudfish_adclean_g_conf_26841df4a25854a715eda3f7b3bb5ef2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_26841df4a25854a715eda3f7b3bb5ef2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_26841df4a25854a715eda3f7b3bb5ef2();
    });
  }
});
