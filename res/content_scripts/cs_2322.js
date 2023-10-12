
function mudfish_adclean_10879da2d68f7e7473515b6207cb92f0() {
  try {
    Sizzle(`.content_area .todayBox`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_10879da2d68f7e7473515b6207cb92f0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_10879da2d68f7e7473515b6207cb92f0, function (items) {
  if (mudfish_adclean_g_conf_10879da2d68f7e7473515b6207cb92f0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_10879da2d68f7e7473515b6207cb92f0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
