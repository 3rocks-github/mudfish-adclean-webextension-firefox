
function mudfish_adclean_d938c23d2d2e8b9174ed257121b30a12() {
  try {
    Sizzle(`.contentsWrap > .topBanner_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d938c23d2d2e8b9174ed257121b30a12 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d938c23d2d2e8b9174ed257121b30a12, function (items) {
  if (mudfish_adclean_g_conf_d938c23d2d2e8b9174ed257121b30a12.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d938c23d2d2e8b9174ed257121b30a12();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
