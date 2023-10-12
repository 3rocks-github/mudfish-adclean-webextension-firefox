
function mudfish_adclean_6a50c5f55aa52bccf8c62a13759e15c1() {
  try {
    Sizzle(`#entFlick`).forEach(element => {
      element.style.height = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a50c5f55aa52bccf8c62a13759e15c1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a50c5f55aa52bccf8c62a13759e15c1, function (items) {
  if (mudfish_adclean_g_conf_6a50c5f55aa52bccf8c62a13759e15c1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a50c5f55aa52bccf8c62a13759e15c1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
