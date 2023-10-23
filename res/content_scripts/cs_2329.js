
function mudfish_adclean_31e7bb3d1029d572eb1d2c26efb07cad() {
  try {
    Sizzle(`html[class*="pc-size"] .m-contents > .side-area > div:nth-child(-n+4)`).forEach(element => {
      element.style.top = "auto !important";
element.style.left = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_31e7bb3d1029d572eb1d2c26efb07cad = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_31e7bb3d1029d572eb1d2c26efb07cad, function (items) {
  if (mudfish_adclean_g_conf_31e7bb3d1029d572eb1d2c26efb07cad.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_31e7bb3d1029d572eb1d2c26efb07cad();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_31e7bb3d1029d572eb1d2c26efb07cad();
    });
  }
});
