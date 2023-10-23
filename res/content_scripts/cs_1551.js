
function mudfish_adclean_803f5ad07c5746c7516360e42c1f398c() {
  try {
    Sizzle(`[class][itemtype*="//schema.org/"] > .right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_803f5ad07c5746c7516360e42c1f398c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_803f5ad07c5746c7516360e42c1f398c, function (items) {
  if (mudfish_adclean_g_conf_803f5ad07c5746c7516360e42c1f398c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_803f5ad07c5746c7516360e42c1f398c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_803f5ad07c5746c7516360e42c1f398c();
    });
  }
});
