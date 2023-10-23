
function mudfish_adclean_a9b23a8c454002abcfdeceae2afc1a13() {
  try {
    Sizzle(`.cate-search-result > .title:has(+ #plusItem)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a9b23a8c454002abcfdeceae2afc1a13 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a9b23a8c454002abcfdeceae2afc1a13, function (items) {
  if (mudfish_adclean_g_conf_a9b23a8c454002abcfdeceae2afc1a13.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a9b23a8c454002abcfdeceae2afc1a13();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a9b23a8c454002abcfdeceae2afc1a13();
    });
  }
});
