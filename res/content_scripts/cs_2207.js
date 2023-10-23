
function mudfish_adclean_3db210ec3f60e64dd15a9a35ae6847d3() {
  try {
    Sizzle(`.content_body > div[class$="_coupang_wrap"]`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3db210ec3f60e64dd15a9a35ae6847d3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3db210ec3f60e64dd15a9a35ae6847d3, function (items) {
  if (mudfish_adclean_g_conf_3db210ec3f60e64dd15a9a35ae6847d3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3db210ec3f60e64dd15a9a35ae6847d3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3db210ec3f60e64dd15a9a35ae6847d3();
    });
  }
});
