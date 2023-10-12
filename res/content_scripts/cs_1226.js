
function mudfish_adclean_ce8139c0b5baa66da71e4ce4e9c348fd() {
  try {
    Sizzle(`._searchHotProduct`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ce8139c0b5baa66da71e4ce4e9c348fd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ce8139c0b5baa66da71e4ce4e9c348fd, function (items) {
  if (mudfish_adclean_g_conf_ce8139c0b5baa66da71e4ce4e9c348fd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ce8139c0b5baa66da71e4ce4e9c348fd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
