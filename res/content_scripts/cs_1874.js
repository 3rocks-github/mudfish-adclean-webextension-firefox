
function mudfish_adclean_58e00a2f30d4ecdf4391bde16ab8396a() {
  try {
    Sizzle(`img[src^="/mainhover/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_58e00a2f30d4ecdf4391bde16ab8396a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_58e00a2f30d4ecdf4391bde16ab8396a, function (items) {
  if (mudfish_adclean_g_conf_58e00a2f30d4ecdf4391bde16ab8396a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_58e00a2f30d4ecdf4391bde16ab8396a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_58e00a2f30d4ecdf4391bde16ab8396a();
    });
  }
});
