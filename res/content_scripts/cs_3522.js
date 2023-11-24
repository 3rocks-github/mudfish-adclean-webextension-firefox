
function mudfish_adclean_a02149529a6d9b612247f0b4b9f5c7bd() {
  try {
    Sizzle(`a[href*="?bo_table=partner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a02149529a6d9b612247f0b4b9f5c7bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a02149529a6d9b612247f0b4b9f5c7bd, function (items) {
  if (mudfish_adclean_g_conf_a02149529a6d9b612247f0b4b9f5c7bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a02149529a6d9b612247f0b4b9f5c7bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a02149529a6d9b612247f0b4b9f5c7bd();
    });
  }
});
