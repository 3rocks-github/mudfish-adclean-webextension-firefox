
function mudfish_adclean_76734fde97534c935d0231e3db4dd277() {
  try {
    Sizzle(`#content > div[class^="ad_"] *`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_76734fde97534c935d0231e3db4dd277 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_76734fde97534c935d0231e3db4dd277, function (items) {
  if (mudfish_adclean_g_conf_76734fde97534c935d0231e3db4dd277.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_76734fde97534c935d0231e3db4dd277();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
