
function mudfish_adclean_b4a82a0b6918835f5ef18e87170ec27a() {
  try {
    Sizzle(`#allKillItemList > .item_list_wrap`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b4a82a0b6918835f5ef18e87170ec27a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b4a82a0b6918835f5ef18e87170ec27a, function (items) {
  if (mudfish_adclean_g_conf_b4a82a0b6918835f5ef18e87170ec27a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b4a82a0b6918835f5ef18e87170ec27a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
