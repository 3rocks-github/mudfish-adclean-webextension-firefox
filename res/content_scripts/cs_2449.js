
function mudfish_adclean_6f39d649d19ece5bd4880b7bdfedac8c() {
  try {
    Sizzle(`table[id^="index_"] tr:has(ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6f39d649d19ece5bd4880b7bdfedac8c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6f39d649d19ece5bd4880b7bdfedac8c, function (items) {
  if (mudfish_adclean_g_conf_6f39d649d19ece5bd4880b7bdfedac8c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6f39d649d19ece5bd4880b7bdfedac8c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
