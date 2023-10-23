
function mudfish_adclean_f86fdf509796a6ad45a5b5e89c7438e5() {
  try {
    Sizzle(`div[class*="inner"].column > div`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f86fdf509796a6ad45a5b5e89c7438e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f86fdf509796a6ad45a5b5e89c7438e5, function (items) {
  if (mudfish_adclean_g_conf_f86fdf509796a6ad45a5b5e89c7438e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f86fdf509796a6ad45a5b5e89c7438e5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f86fdf509796a6ad45a5b5e89c7438e5();
    });
  }
});
