
function mudfish_adclean_7b3878b5a390c6323c6bce51e5b19217() {
  try {
    Sizzle(`iframe[src^="/banners/load/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7b3878b5a390c6323c6bce51e5b19217 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7b3878b5a390c6323c6bce51e5b19217, function (items) {
  if (mudfish_adclean_g_conf_7b3878b5a390c6323c6bce51e5b19217.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7b3878b5a390c6323c6bce51e5b19217();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7b3878b5a390c6323c6bce51e5b19217();
    });
  }
});
