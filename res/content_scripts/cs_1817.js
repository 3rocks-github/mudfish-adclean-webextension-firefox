
function mudfish_adclean_009e2c84d8a1da3cd431203d2050f107() {
  try {
    Sizzle(`.cpz_inner .recommend_wrap > .recommend_list`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_009e2c84d8a1da3cd431203d2050f107 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_009e2c84d8a1da3cd431203d2050f107, function (items) {
  if (mudfish_adclean_g_conf_009e2c84d8a1da3cd431203d2050f107.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_009e2c84d8a1da3cd431203d2050f107();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_009e2c84d8a1da3cd431203d2050f107();
    });
  }
});
