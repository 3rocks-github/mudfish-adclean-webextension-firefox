
function mudfish_adclean_0ec57ecfed6f7683d2dca1db9b386ec1() {
  try {
    Sizzle(`section.mo-top-nav ~ div[style]:not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0ec57ecfed6f7683d2dca1db9b386ec1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0ec57ecfed6f7683d2dca1db9b386ec1, function (items) {
  if (mudfish_adclean_g_conf_0ec57ecfed6f7683d2dca1db9b386ec1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0ec57ecfed6f7683d2dca1db9b386ec1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0ec57ecfed6f7683d2dca1db9b386ec1();
    });
  }
});
