
function mudfish_adclean_cb73ca98431616d258a183953c7b34ad() {
  try {
    Sizzle(`div[class^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cb73ca98431616d258a183953c7b34ad = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cb73ca98431616d258a183953c7b34ad, function (items) {
  if (mudfish_adclean_g_conf_cb73ca98431616d258a183953c7b34ad.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cb73ca98431616d258a183953c7b34ad();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
