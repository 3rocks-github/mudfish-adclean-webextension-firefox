
function mudfish_adclean_5d25b48d07042abe86ddb249b9aead1a() {
  try {
    Sizzle(`div[id^="Partner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5d25b48d07042abe86ddb249b9aead1a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5d25b48d07042abe86ddb249b9aead1a, function (items) {
  if (mudfish_adclean_g_conf_5d25b48d07042abe86ddb249b9aead1a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5d25b48d07042abe86ddb249b9aead1a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
