
function mudfish_adclean_42ae31da6488613000e62a07873905f4() {
  try {
    Sizzle(`#topSearchWrap`).forEach(element => {
      element.style.paddingBottom = "50px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_42ae31da6488613000e62a07873905f4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_42ae31da6488613000e62a07873905f4, function (items) {
  if (mudfish_adclean_g_conf_42ae31da6488613000e62a07873905f4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_42ae31da6488613000e62a07873905f4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
