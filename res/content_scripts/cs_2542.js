
function mudfish_adclean_2d15757749909830835187f97b162f22() {
  try {
    Sizzle(`.container:has(~ div[style]#toTop) article.content`).forEach(element => {
      element.style.marginTop = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d15757749909830835187f97b162f22 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d15757749909830835187f97b162f22, function (items) {
  if (mudfish_adclean_g_conf_2d15757749909830835187f97b162f22.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d15757749909830835187f97b162f22();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
