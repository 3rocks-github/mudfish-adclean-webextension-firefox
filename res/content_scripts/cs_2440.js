
function mudfish_adclean_d3229282bae04c287f885047e7c99a4b() {
  try {
    Sizzle(`*:has(> a[target="_blank"] img[src^="/images/KTImage/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3229282bae04c287f885047e7c99a4b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3229282bae04c287f885047e7c99a4b, function (items) {
  if (mudfish_adclean_g_conf_d3229282bae04c287f885047e7c99a4b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3229282bae04c287f885047e7c99a4b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
