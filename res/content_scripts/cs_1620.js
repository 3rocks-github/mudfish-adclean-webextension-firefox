
function mudfish_adclean_6f5fd869609b68b56952ca9a9e51673a() {
  try {
    Sizzle(`div[style].content ~ div[class$="ad"][style*="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6f5fd869609b68b56952ca9a9e51673a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6f5fd869609b68b56952ca9a9e51673a, function (items) {
  if (mudfish_adclean_g_conf_6f5fd869609b68b56952ca9a9e51673a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6f5fd869609b68b56952ca9a9e51673a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
