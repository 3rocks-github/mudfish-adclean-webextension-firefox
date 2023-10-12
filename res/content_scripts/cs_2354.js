
function mudfish_adclean_2d258462cf727785a94fe122ae231a48() {
  try {
    Sizzle(`.area_ranking`).forEach(element => {
      element.style.top = "400px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d258462cf727785a94fe122ae231a48 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d258462cf727785a94fe122ae231a48, function (items) {
  if (mudfish_adclean_g_conf_2d258462cf727785a94fe122ae231a48.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d258462cf727785a94fe122ae231a48();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
