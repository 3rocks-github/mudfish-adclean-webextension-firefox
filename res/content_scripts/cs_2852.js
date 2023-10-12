
function mudfish_adclean_daad3dad3146c9097af23f8b7819631d() {
  try {
    Sizzle(`div:is([aria-label="Primary Sidebar"], #home-sidebar) > aside:has(img.image)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_daad3dad3146c9097af23f8b7819631d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_daad3dad3146c9097af23f8b7819631d, function (items) {
  if (mudfish_adclean_g_conf_daad3dad3146c9097af23f8b7819631d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_daad3dad3146c9097af23f8b7819631d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
