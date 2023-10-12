
function mudfish_adclean_18fb27b6e3f119dadcb2268019f95c3a() {
  try {
    Sizzle(`.expanded > #user-container`).forEach(element => {
      element.style.paddingTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_18fb27b6e3f119dadcb2268019f95c3a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_18fb27b6e3f119dadcb2268019f95c3a, function (items) {
  if (mudfish_adclean_g_conf_18fb27b6e3f119dadcb2268019f95c3a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_18fb27b6e3f119dadcb2268019f95c3a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
