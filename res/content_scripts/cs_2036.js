
function mudfish_adclean_057cd75f53a4f6153e9d1075a5ea24cc() {
  try {
    Sizzle(`ul[id="info.search.place.list"] > li.AdItem`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_057cd75f53a4f6153e9d1075a5ea24cc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_057cd75f53a4f6153e9d1075a5ea24cc, function (items) {
  if (mudfish_adclean_g_conf_057cd75f53a4f6153e9d1075a5ea24cc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_057cd75f53a4f6153e9d1075a5ea24cc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
