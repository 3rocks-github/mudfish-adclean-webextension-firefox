
function mudfish_adclean_7c4e5c2cee7fa51854d3a4ab6c937f3a() {
  try {
    Sizzle(`div[class^="banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7c4e5c2cee7fa51854d3a4ab6c937f3a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7c4e5c2cee7fa51854d3a4ab6c937f3a, function (items) {
  if (mudfish_adclean_g_conf_7c4e5c2cee7fa51854d3a4ab6c937f3a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7c4e5c2cee7fa51854d3a4ab6c937f3a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
