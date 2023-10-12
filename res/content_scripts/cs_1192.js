
function mudfish_adclean_e1e25403ddee150545efb165dc4e60ca() {
  try {
    Sizzle(`.side_floating`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e1e25403ddee150545efb165dc4e60ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e1e25403ddee150545efb165dc4e60ca, function (items) {
  if (mudfish_adclean_g_conf_e1e25403ddee150545efb165dc4e60ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e1e25403ddee150545efb165dc4e60ca();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
