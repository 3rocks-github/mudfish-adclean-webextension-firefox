
function mudfish_adclean_6ff16f7db969146abd8b69cb06ad5c08() {
  try {
    Sizzle(`#yWelTopMid .yWelTodayBook .tBCont .tBInfo .tb_readCon`).forEach(element => {
      element.style.width = "calc(100% - 30px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6ff16f7db969146abd8b69cb06ad5c08 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6ff16f7db969146abd8b69cb06ad5c08, function (items) {
  if (mudfish_adclean_g_conf_6ff16f7db969146abd8b69cb06ad5c08.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6ff16f7db969146abd8b69cb06ad5c08();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
