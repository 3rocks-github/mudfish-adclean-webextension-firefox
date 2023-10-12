
function mudfish_adclean_a4cc2791e9df6dd281916c204ad742de() {
  try {
    Sizzle(`table[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a4cc2791e9df6dd281916c204ad742de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a4cc2791e9df6dd281916c204ad742de, function (items) {
  if (mudfish_adclean_g_conf_a4cc2791e9df6dd281916c204ad742de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a4cc2791e9df6dd281916c204ad742de();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
