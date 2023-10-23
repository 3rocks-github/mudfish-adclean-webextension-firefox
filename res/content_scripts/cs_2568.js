
function mudfish_adclean_a5b692a65d87ccb33e22dd9ee1a069bd() {
  try {
    Sizzle(`.offer-container > .suggestion-item:has(a[href="#"] > span:contains(광고))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a5b692a65d87ccb33e22dd9ee1a069bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a5b692a65d87ccb33e22dd9ee1a069bd, function (items) {
  if (mudfish_adclean_g_conf_a5b692a65d87ccb33e22dd9ee1a069bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a5b692a65d87ccb33e22dd9ee1a069bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a5b692a65d87ccb33e22dd9ee1a069bd();
    });
  }
});
