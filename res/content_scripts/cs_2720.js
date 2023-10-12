
function mudfish_adclean_f3d3f022fcec66a1785f7db7bf30e948() {
  try {
    Sizzle(`#contentBody.bodyHide`).forEach(element => {
      element.style.height = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f3d3f022fcec66a1785f7db7bf30e948 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f3d3f022fcec66a1785f7db7bf30e948, function (items) {
  if (mudfish_adclean_g_conf_f3d3f022fcec66a1785f7db7bf30e948.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f3d3f022fcec66a1785f7db7bf30e948();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
