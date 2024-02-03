
function mudfish_adclean_7df9d8d3bbd461b149f1ca060ae95a2a() {
  try {
    Sizzle(`div[x-data="popups()"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7df9d8d3bbd461b149f1ca060ae95a2a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7df9d8d3bbd461b149f1ca060ae95a2a, function (items) {
  if (mudfish_adclean_g_conf_7df9d8d3bbd461b149f1ca060ae95a2a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7df9d8d3bbd461b149f1ca060ae95a2a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7df9d8d3bbd461b149f1ca060ae95a2a();
    });
  }
});
