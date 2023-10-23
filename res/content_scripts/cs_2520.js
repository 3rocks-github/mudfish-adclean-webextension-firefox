
function mudfish_adclean_c2dc97f93a082250ae1ee7d367cfecf3() {
  try {
    Sizzle(`tr:has(> td[colspan][rowspan] > a[href*="//prod.danawa.com/"] > img[src^="./partner/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c2dc97f93a082250ae1ee7d367cfecf3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c2dc97f93a082250ae1ee7d367cfecf3, function (items) {
  if (mudfish_adclean_g_conf_c2dc97f93a082250ae1ee7d367cfecf3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c2dc97f93a082250ae1ee7d367cfecf3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c2dc97f93a082250ae1ee7d367cfecf3();
    });
  }
});
