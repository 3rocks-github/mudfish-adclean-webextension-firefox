
function mudfish_adclean_c96dffbb7a118363a2584833225aabf5() {
  try {
    Sizzle(`div[id^="mo_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c96dffbb7a118363a2584833225aabf5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c96dffbb7a118363a2584833225aabf5, function (items) {
  if (mudfish_adclean_g_conf_c96dffbb7a118363a2584833225aabf5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c96dffbb7a118363a2584833225aabf5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c96dffbb7a118363a2584833225aabf5();
    });
  }
});
