
function mudfish_adclean_c6ba5313e3b4dfafe75be2873d7bfb30() {
  try {
    Sizzle(`#popups`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c6ba5313e3b4dfafe75be2873d7bfb30 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c6ba5313e3b4dfafe75be2873d7bfb30, function (items) {
  if (mudfish_adclean_g_conf_c6ba5313e3b4dfafe75be2873d7bfb30.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c6ba5313e3b4dfafe75be2873d7bfb30();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c6ba5313e3b4dfafe75be2873d7bfb30();
    });
  }
});
