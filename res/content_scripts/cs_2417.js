
function mudfish_adclean_25d88f5b5ce944319d03ec78c8066789() {
  try {
    Sizzle(`table[bgcolor][align] table[cellspacing][align] tr:has(table table strong > a[href*="?Board=enterprise"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_25d88f5b5ce944319d03ec78c8066789 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_25d88f5b5ce944319d03ec78c8066789, function (items) {
  if (mudfish_adclean_g_conf_25d88f5b5ce944319d03ec78c8066789.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_25d88f5b5ce944319d03ec78c8066789();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
