
function mudfish_adclean_9399abd520690cd9112513a9c58dc35d() {
  try {
    Sizzle(`.navbar-nav > li[class]:has(> a[href$="/토토보증업체"][alt="토토보증업체"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9399abd520690cd9112513a9c58dc35d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9399abd520690cd9112513a9c58dc35d, function (items) {
  if (mudfish_adclean_g_conf_9399abd520690cd9112513a9c58dc35d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9399abd520690cd9112513a9c58dc35d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9399abd520690cd9112513a9c58dc35d();
    });
  }
});
