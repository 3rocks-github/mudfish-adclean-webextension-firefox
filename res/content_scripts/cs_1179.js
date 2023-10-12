
function mudfish_adclean_9352384c071e1a47b8988b65a96a668b() {
  try {
    Sizzle(`div[class*="_AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9352384c071e1a47b8988b65a96a668b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9352384c071e1a47b8988b65a96a668b, function (items) {
  if (mudfish_adclean_g_conf_9352384c071e1a47b8988b65a96a668b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9352384c071e1a47b8988b65a96a668b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
