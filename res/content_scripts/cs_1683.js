
function mudfish_adclean_c3d5f1b76d35272a02f545c3c1862474() {
  try {
    Sizzle(`.section div[class$="con_b"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c3d5f1b76d35272a02f545c3c1862474 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c3d5f1b76d35272a02f545c3c1862474, function (items) {
  if (mudfish_adclean_g_conf_c3d5f1b76d35272a02f545c3c1862474.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c3d5f1b76d35272a02f545c3c1862474();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
