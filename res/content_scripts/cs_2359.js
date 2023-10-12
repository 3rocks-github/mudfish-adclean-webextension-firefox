
function mudfish_adclean_165bce2c112558ae73d56bddacae4f6c() {
  try {
    Sizzle(`.wrap_list .standard`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_165bce2c112558ae73d56bddacae4f6c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_165bce2c112558ae73d56bddacae4f6c, function (items) {
  if (mudfish_adclean_g_conf_165bce2c112558ae73d56bddacae4f6c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_165bce2c112558ae73d56bddacae4f6c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
