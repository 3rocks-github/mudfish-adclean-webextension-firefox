
function mudfish_adclean_2540fbabce2c0a4db3a503dfffd567c8() {
  try {
    Sizzle(`.wide_layout .wrap_srch_res .wrap_tab`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2540fbabce2c0a4db3a503dfffd567c8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2540fbabce2c0a4db3a503dfffd567c8, function (items) {
  if (mudfish_adclean_g_conf_2540fbabce2c0a4db3a503dfffd567c8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2540fbabce2c0a4db3a503dfffd567c8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2540fbabce2c0a4db3a503dfffd567c8();
    });
  }
});
