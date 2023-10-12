
function mudfish_adclean_2858a1d8c3db60d454396014a501358d() {
  try {
    Sizzle(`div[class$="ad"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2858a1d8c3db60d454396014a501358d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2858a1d8c3db60d454396014a501358d, function (items) {
  if (mudfish_adclean_g_conf_2858a1d8c3db60d454396014a501358d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2858a1d8c3db60d454396014a501358d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
