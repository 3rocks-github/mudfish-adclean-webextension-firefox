
function mudfish_adclean_d3d2227d1b80251bcacd8516aca20b8f() {
  try {
    Sizzle(`#fusion-app footer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3d2227d1b80251bcacd8516aca20b8f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3d2227d1b80251bcacd8516aca20b8f, function (items) {
  if (mudfish_adclean_g_conf_d3d2227d1b80251bcacd8516aca20b8f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3d2227d1b80251bcacd8516aca20b8f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
