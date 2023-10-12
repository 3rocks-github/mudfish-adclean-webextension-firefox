
function mudfish_adclean_68e766494cfa9a4ae3326fe2cde26417() {
  try {
    Sizzle(`.rd_ft > div[style^="margin:"][style*="max-width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_68e766494cfa9a4ae3326fe2cde26417 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_68e766494cfa9a4ae3326fe2cde26417, function (items) {
  if (mudfish_adclean_g_conf_68e766494cfa9a4ae3326fe2cde26417.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_68e766494cfa9a4ae3326fe2cde26417();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
