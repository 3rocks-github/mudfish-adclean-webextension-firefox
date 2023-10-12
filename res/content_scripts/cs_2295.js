
function mudfish_adclean_6b51e9dbb2f478bc5b75407398e47acc() {
  try {
    Sizzle(`.contentBox > .topNews .icon-list`).forEach(element => {
      element.style.borderTop = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6b51e9dbb2f478bc5b75407398e47acc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6b51e9dbb2f478bc5b75407398e47acc, function (items) {
  if (mudfish_adclean_g_conf_6b51e9dbb2f478bc5b75407398e47acc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6b51e9dbb2f478bc5b75407398e47acc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
