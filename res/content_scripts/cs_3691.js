
function mudfish_adclean_309be98c0e73727db167bb4906678f4f() {
  try {
    Sizzle(`.ReactVirtualized__Grid__innerScrollContainer .box__banner-wrap > .box__banner--today`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_309be98c0e73727db167bb4906678f4f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_309be98c0e73727db167bb4906678f4f, function (items) {
  if (mudfish_adclean_g_conf_309be98c0e73727db167bb4906678f4f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_309be98c0e73727db167bb4906678f4f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_309be98c0e73727db167bb4906678f4f();
    });
  }
});
