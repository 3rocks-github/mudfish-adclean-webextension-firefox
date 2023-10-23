
function mudfish_adclean_17d4d5bf6c96b1bd4c2af35a4fd33764() {
  try {
    Sizzle(`.login_inputbox`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_17d4d5bf6c96b1bd4c2af35a4fd33764 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_17d4d5bf6c96b1bd4c2af35a4fd33764, function (items) {
  if (mudfish_adclean_g_conf_17d4d5bf6c96b1bd4c2af35a4fd33764.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_17d4d5bf6c96b1bd4c2af35a4fd33764();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_17d4d5bf6c96b1bd4c2af35a4fd33764();
    });
  }
});
