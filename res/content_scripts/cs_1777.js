
function mudfish_adclean_69d597eb2fe546ee024f01a27b680558() {
  try {
    Sizzle(`.head_bar2 > div[class]:not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_69d597eb2fe546ee024f01a27b680558 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_69d597eb2fe546ee024f01a27b680558, function (items) {
  if (mudfish_adclean_g_conf_69d597eb2fe546ee024f01a27b680558.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_69d597eb2fe546ee024f01a27b680558();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
