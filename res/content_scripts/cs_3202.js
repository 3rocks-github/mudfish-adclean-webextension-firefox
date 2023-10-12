
function mudfish_adclean_ce768d87c8177ec96a6317a734ba5064() {
  try {
    Sizzle(`header`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ce768d87c8177ec96a6317a734ba5064 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ce768d87c8177ec96a6317a734ba5064, function (items) {
  if (mudfish_adclean_g_conf_ce768d87c8177ec96a6317a734ba5064.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ce768d87c8177ec96a6317a734ba5064();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
