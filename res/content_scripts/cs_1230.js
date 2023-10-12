
function mudfish_adclean_656b46a724bdf98b3f3909572b44c419() {
  try {
    Sizzle(`.search_content > section[data-log-actionid-area="power"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_656b46a724bdf98b3f3909572b44c419 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_656b46a724bdf98b3f3909572b44c419, function (items) {
  if (mudfish_adclean_g_conf_656b46a724bdf98b3f3909572b44c419.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_656b46a724bdf98b3f3909572b44c419();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
