
function mudfish_adclean_1e11fe929cd07bcceceb4bbba9ca84f2() {
  try {
    Sizzle(`.adtive`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1e11fe929cd07bcceceb4bbba9ca84f2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1e11fe929cd07bcceceb4bbba9ca84f2, function (items) {
  if (mudfish_adclean_g_conf_1e11fe929cd07bcceceb4bbba9ca84f2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1e11fe929cd07bcceceb4bbba9ca84f2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
