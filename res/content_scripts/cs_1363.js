
function mudfish_adclean_148152bed2cdf1d0e13ff004b15f3def() {
  try {
    Sizzle(`header ~ #_hidden_layer_`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_148152bed2cdf1d0e13ff004b15f3def = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_148152bed2cdf1d0e13ff004b15f3def, function (items) {
  if (mudfish_adclean_g_conf_148152bed2cdf1d0e13ff004b15f3def.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_148152bed2cdf1d0e13ff004b15f3def();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
