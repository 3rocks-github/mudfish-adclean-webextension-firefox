
function mudfish_adclean_f59539262bb6310040a3a88cb92c621d() {
  try {
    Sizzle(`a[class*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f59539262bb6310040a3a88cb92c621d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f59539262bb6310040a3a88cb92c621d, function (items) {
  if (mudfish_adclean_g_conf_f59539262bb6310040a3a88cb92c621d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f59539262bb6310040a3a88cb92c621d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
