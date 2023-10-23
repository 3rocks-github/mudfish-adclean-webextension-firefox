
function mudfish_adclean_bca1a93fbaa886d294d8c0a997143a2f() {
  try {
    Sizzle(`.banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bca1a93fbaa886d294d8c0a997143a2f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bca1a93fbaa886d294d8c0a997143a2f, function (items) {
  if (mudfish_adclean_g_conf_bca1a93fbaa886d294d8c0a997143a2f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bca1a93fbaa886d294d8c0a997143a2f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bca1a93fbaa886d294d8c0a997143a2f();
    });
  }
});
