
function mudfish_adclean_f6152e2ca42876acbd1a0872aa5f1c8b() {
  try {
    Sizzle(`.taboola`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f6152e2ca42876acbd1a0872aa5f1c8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f6152e2ca42876acbd1a0872aa5f1c8b, function (items) {
  if (mudfish_adclean_g_conf_f6152e2ca42876acbd1a0872aa5f1c8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f6152e2ca42876acbd1a0872aa5f1c8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
