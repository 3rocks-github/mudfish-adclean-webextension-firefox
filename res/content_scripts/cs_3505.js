
function mudfish_adclean_12cdf45464f2a9449567bb30ac887762() {
  try {
    Sizzle(`iframe[src^="/media/include/media_view_banner.asp"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_12cdf45464f2a9449567bb30ac887762 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_12cdf45464f2a9449567bb30ac887762, function (items) {
  if (mudfish_adclean_g_conf_12cdf45464f2a9449567bb30ac887762.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_12cdf45464f2a9449567bb30ac887762();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_12cdf45464f2a9449567bb30ac887762();
    });
  }
});
