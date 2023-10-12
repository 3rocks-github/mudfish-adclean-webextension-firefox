
function mudfish_adclean_fffd67906380cd35b76ce85ab4cce8a7() {
  try {
    Sizzle(`#primary`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fffd67906380cd35b76ce85ab4cce8a7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fffd67906380cd35b76ce85ab4cce8a7, function (items) {
  if (mudfish_adclean_g_conf_fffd67906380cd35b76ce85ab4cce8a7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fffd67906380cd35b76ce85ab4cce8a7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
