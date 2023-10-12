
function mudfish_adclean_5b191b4cb5df7190fbefc5e3f89f9e74() {
  try {
    Sizzle(`#body_wrap > #body_main > div[style]:nth-child(2)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5b191b4cb5df7190fbefc5e3f89f9e74 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5b191b4cb5df7190fbefc5e3f89f9e74, function (items) {
  if (mudfish_adclean_g_conf_5b191b4cb5df7190fbefc5e3f89f9e74.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5b191b4cb5df7190fbefc5e3f89f9e74();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
