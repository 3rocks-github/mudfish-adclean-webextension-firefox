
function mudfish_adclean_5c62bc5cd729cdc2585cc1a3e4a811f7() {
  try {
    Sizzle(`div[id*="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c62bc5cd729cdc2585cc1a3e4a811f7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c62bc5cd729cdc2585cc1a3e4a811f7, function (items) {
  if (mudfish_adclean_g_conf_5c62bc5cd729cdc2585cc1a3e4a811f7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c62bc5cd729cdc2585cc1a3e4a811f7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5c62bc5cd729cdc2585cc1a3e4a811f7();
    });
  }
});
