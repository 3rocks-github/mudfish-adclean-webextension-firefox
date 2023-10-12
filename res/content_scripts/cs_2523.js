
function mudfish_adclean_a1901918e22cc7e4ed542871992664fd() {
  try {
    Sizzle(`pre > div[style]:has(> iframe[src*=".ad4989.co.kr/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a1901918e22cc7e4ed542871992664fd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a1901918e22cc7e4ed542871992664fd, function (items) {
  if (mudfish_adclean_g_conf_a1901918e22cc7e4ed542871992664fd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a1901918e22cc7e4ed542871992664fd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
