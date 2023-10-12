
function mudfish_adclean_6399b64abff1c6503d869ccd382bf003() {
  try {
    Sizzle(`body`).forEach(element => {
      element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6399b64abff1c6503d869ccd382bf003 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6399b64abff1c6503d869ccd382bf003, function (items) {
  if (mudfish_adclean_g_conf_6399b64abff1c6503d869ccd382bf003.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6399b64abff1c6503d869ccd382bf003();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
