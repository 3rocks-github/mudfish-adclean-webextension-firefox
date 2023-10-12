
function mudfish_adclean_6c3b630487a251a41a8d4b97d689b183() {
  try {
    Sizzle(`#section_body`).forEach(element => {
      element.style.borderTop = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6c3b630487a251a41a8d4b97d689b183 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6c3b630487a251a41a8d4b97d689b183, function (items) {
  if (mudfish_adclean_g_conf_6c3b630487a251a41a8d4b97d689b183.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6c3b630487a251a41a8d4b97d689b183();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
