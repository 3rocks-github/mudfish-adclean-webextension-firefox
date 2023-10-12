
function mudfish_adclean_2acc3b3292584460c8dd68270df1d574() {
  try {
    Sizzle(`body[data-elementor-device-mode="desktop"] div[itemprop="mainContentOfPage"]`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2acc3b3292584460c8dd68270df1d574 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2acc3b3292584460c8dd68270df1d574, function (items) {
  if (mudfish_adclean_g_conf_2acc3b3292584460c8dd68270df1d574.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2acc3b3292584460c8dd68270df1d574();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
