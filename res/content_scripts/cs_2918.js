
function mudfish_adclean_297bb0b4b6536dc21209d40d7dfb6d8c() {
  try {
    Sizzle(`li.search-product__ad-badge`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_297bb0b4b6536dc21209d40d7dfb6d8c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_297bb0b4b6536dc21209d40d7dfb6d8c, function (items) {
  if (mudfish_adclean_g_conf_297bb0b4b6536dc21209d40d7dfb6d8c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_297bb0b4b6536dc21209d40d7dfb6d8c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_297bb0b4b6536dc21209d40d7dfb6d8c();
    });
  }
});
