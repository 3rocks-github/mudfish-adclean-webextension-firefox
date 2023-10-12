
function mudfish_adclean_c070ced24a5c25cd47e4b90be2e71171() {
  try {
    Sizzle(`#yWelTopMid .yWelTodayBook`).forEach(element => {
      element.style.width = "calc(100% - 240px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c070ced24a5c25cd47e4b90be2e71171 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c070ced24a5c25cd47e4b90be2e71171, function (items) {
  if (mudfish_adclean_g_conf_c070ced24a5c25cd47e4b90be2e71171.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c070ced24a5c25cd47e4b90be2e71171();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
