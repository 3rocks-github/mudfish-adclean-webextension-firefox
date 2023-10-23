
function mudfish_adclean_69c7ededc7ca83fb75a4c63ea10853ed() {
  try {
    Sizzle(`.main-content > .content-article:not(:has(+ .content-aside > div[data-tiara-layer][class="box_side"]))`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_69c7ededc7ca83fb75a4c63ea10853ed = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_69c7ededc7ca83fb75a4c63ea10853ed, function (items) {
  if (mudfish_adclean_g_conf_69c7ededc7ca83fb75a4c63ea10853ed.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_69c7ededc7ca83fb75a4c63ea10853ed();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_69c7ededc7ca83fb75a4c63ea10853ed();
    });
  }
});
