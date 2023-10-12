
function mudfish_adclean_064f3683cdb06850fcb30e0d3ce895c6() {
  try {
    Sizzle(`.sect-movie-chart > ol:nth-child(2) > li`).forEach(element => {
      element.style.marginLeft = "130px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_064f3683cdb06850fcb30e0d3ce895c6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_064f3683cdb06850fcb30e0d3ce895c6, function (items) {
  if (mudfish_adclean_g_conf_064f3683cdb06850fcb30e0d3ce895c6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_064f3683cdb06850fcb30e0d3ce895c6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
