
function mudfish_adclean_ece1f1517694eeda72e8239dfa8d0b33() {
  try {
    Sizzle(`[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ece1f1517694eeda72e8239dfa8d0b33 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ece1f1517694eeda72e8239dfa8d0b33, function (items) {
  if (mudfish_adclean_g_conf_ece1f1517694eeda72e8239dfa8d0b33.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ece1f1517694eeda72e8239dfa8d0b33();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
