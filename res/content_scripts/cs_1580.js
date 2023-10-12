
function mudfish_adclean_9c440fe237735263ed0cb2ad0289ef28() {
  try {
    Sizzle(`.MapMain > #map ~ div[class]:not([id]):not([style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9c440fe237735263ed0cb2ad0289ef28 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9c440fe237735263ed0cb2ad0289ef28, function (items) {
  if (mudfish_adclean_g_conf_9c440fe237735263ed0cb2ad0289ef28.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9c440fe237735263ed0cb2ad0289ef28();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
