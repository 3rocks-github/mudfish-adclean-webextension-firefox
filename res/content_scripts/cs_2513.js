
function mudfish_adclean_07504bb58946fffad39b50cd12abdb95() {
  try {
    Sizzle(`body > article#content > article.block:has(ul#life_slider)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_07504bb58946fffad39b50cd12abdb95 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_07504bb58946fffad39b50cd12abdb95, function (items) {
  if (mudfish_adclean_g_conf_07504bb58946fffad39b50cd12abdb95.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_07504bb58946fffad39b50cd12abdb95();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_07504bb58946fffad39b50cd12abdb95();
    });
  }
});
