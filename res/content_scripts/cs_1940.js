
function mudfish_adclean_a572ab0f5f1b3833aac1af2797f64a56() {
  try {
    Sizzle(`iframe[src*="//www.etnews.com/tools/refresh_script.html?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a572ab0f5f1b3833aac1af2797f64a56 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a572ab0f5f1b3833aac1af2797f64a56, function (items) {
  if (mudfish_adclean_g_conf_a572ab0f5f1b3833aac1af2797f64a56.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a572ab0f5f1b3833aac1af2797f64a56();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
