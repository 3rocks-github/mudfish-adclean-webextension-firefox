
function mudfish_adclean_d48993a86f6d382d91c759e2a3e81789() {
  try {
    Sizzle(`.cPrdlists_wrap > .cPrdlists_rows:has(script[src*="//nvapi.feeldmc.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d48993a86f6d382d91c759e2a3e81789 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d48993a86f6d382d91c759e2a3e81789, function (items) {
  if (mudfish_adclean_g_conf_d48993a86f6d382d91c759e2a3e81789.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d48993a86f6d382d91c759e2a3e81789();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
