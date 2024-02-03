
function mudfish_adclean_2c78556a818012a5c9276eeacce7a99d() {
  try {
    Sizzle(`.comic_bot_bnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2c78556a818012a5c9276eeacce7a99d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2c78556a818012a5c9276eeacce7a99d, function (items) {
  if (mudfish_adclean_g_conf_2c78556a818012a5c9276eeacce7a99d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2c78556a818012a5c9276eeacce7a99d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2c78556a818012a5c9276eeacce7a99d();
    });
  }
});
