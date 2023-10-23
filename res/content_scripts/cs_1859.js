
function mudfish_adclean_8ec95312bf777484ca36d1800b86cd62() {
  try {
    Sizzle(`body > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8ec95312bf777484ca36d1800b86cd62 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8ec95312bf777484ca36d1800b86cd62, function (items) {
  if (mudfish_adclean_g_conf_8ec95312bf777484ca36d1800b86cd62.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8ec95312bf777484ca36d1800b86cd62();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8ec95312bf777484ca36d1800b86cd62();
    });
  }
});
