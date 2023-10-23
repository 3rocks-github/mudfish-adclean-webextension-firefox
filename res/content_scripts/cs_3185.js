
function mudfish_adclean_d7b1b7b224384428154d2fc71e9b1286() {
  try {
    Sizzle(`.banner.container > .row > .col-6`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d7b1b7b224384428154d2fc71e9b1286 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d7b1b7b224384428154d2fc71e9b1286, function (items) {
  if (mudfish_adclean_g_conf_d7b1b7b224384428154d2fc71e9b1286.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d7b1b7b224384428154d2fc71e9b1286();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d7b1b7b224384428154d2fc71e9b1286();
    });
  }
});
