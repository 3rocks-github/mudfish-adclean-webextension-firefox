
function mudfish_adclean_4fe515a45f16f03827d2d4c6fff727a9() {
  try {
    Sizzle(`#wrap_cnts td[align="center"]:has(img[src$="_ad.gif"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4fe515a45f16f03827d2d4c6fff727a9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4fe515a45f16f03827d2d4c6fff727a9, function (items) {
  if (mudfish_adclean_g_conf_4fe515a45f16f03827d2d4c6fff727a9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4fe515a45f16f03827d2d4c6fff727a9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
