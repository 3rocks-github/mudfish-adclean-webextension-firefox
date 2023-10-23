
function mudfish_adclean_8530f5d478f3b7098959bb187d76a04d() {
  try {
    Sizzle(`.cate-search-result > .title:has(+ #powerPlus)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8530f5d478f3b7098959bb187d76a04d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8530f5d478f3b7098959bb187d76a04d, function (items) {
  if (mudfish_adclean_g_conf_8530f5d478f3b7098959bb187d76a04d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8530f5d478f3b7098959bb187d76a04d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8530f5d478f3b7098959bb187d76a04d();
    });
  }
});
