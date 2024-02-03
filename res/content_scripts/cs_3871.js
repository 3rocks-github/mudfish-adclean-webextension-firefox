
function mudfish_adclean_5c0e07118bc2d79981fd442ffe18b4fc() {
  try {
    Sizzle(`.la`).forEach(element => {
      element.style.height = "75px !important";
element.style.width = "75px !important";
element.style.visibility = "hidden !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c0e07118bc2d79981fd442ffe18b4fc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c0e07118bc2d79981fd442ffe18b4fc, function (items) {
  if (mudfish_adclean_g_conf_5c0e07118bc2d79981fd442ffe18b4fc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c0e07118bc2d79981fd442ffe18b4fc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5c0e07118bc2d79981fd442ffe18b4fc();
    });
  }
});
