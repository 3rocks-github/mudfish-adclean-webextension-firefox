
function mudfish_adclean_c0d1f7452b04d60efeae8d5ff65cf9ac() {
  try {
    Sizzle(`.search_box_listdeal > .aiplus`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c0d1f7452b04d60efeae8d5ff65cf9ac = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c0d1f7452b04d60efeae8d5ff65cf9ac, function (items) {
  if (mudfish_adclean_g_conf_c0d1f7452b04d60efeae8d5ff65cf9ac.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c0d1f7452b04d60efeae8d5ff65cf9ac();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c0d1f7452b04d60efeae8d5ff65cf9ac();
    });
  }
});
