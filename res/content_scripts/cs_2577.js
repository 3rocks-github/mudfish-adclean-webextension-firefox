
function mudfish_adclean_c6cf2e9c59a9416d8e517b981a48b00d() {
  try {
    Sizzle(`.app-board-section > ul.app-board-template-list > li.notice:has(> a[href] > span > font[color]:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c6cf2e9c59a9416d8e517b981a48b00d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c6cf2e9c59a9416d8e517b981a48b00d, function (items) {
  if (mudfish_adclean_g_conf_c6cf2e9c59a9416d8e517b981a48b00d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c6cf2e9c59a9416d8e517b981a48b00d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
