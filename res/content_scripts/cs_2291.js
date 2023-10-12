
function mudfish_adclean_eceb94407a50b13ca62e512274f59304() {
  try {
    Sizzle(`header`).forEach(element => {
      element.style.height = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eceb94407a50b13ca62e512274f59304 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eceb94407a50b13ca62e512274f59304, function (items) {
  if (mudfish_adclean_g_conf_eceb94407a50b13ca62e512274f59304.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eceb94407a50b13ca62e512274f59304();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
