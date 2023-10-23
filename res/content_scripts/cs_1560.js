
function mudfish_adclean_b498c159b1a9fce49f06671b5444a84b() {
  try {
    Sizzle(`li[data-nvmid]._ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b498c159b1a9fce49f06671b5444a84b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b498c159b1a9fce49f06671b5444a84b, function (items) {
  if (mudfish_adclean_g_conf_b498c159b1a9fce49f06671b5444a84b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b498c159b1a9fce49f06671b5444a84b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b498c159b1a9fce49f06671b5444a84b();
    });
  }
});
