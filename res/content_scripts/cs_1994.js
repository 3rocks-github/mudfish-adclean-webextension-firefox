
function mudfish_adclean_5c68885cfa3253a2d945e38294d56734() {
  try {
    Sizzle(`div[id^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c68885cfa3253a2d945e38294d56734 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c68885cfa3253a2d945e38294d56734, function (items) {
  if (mudfish_adclean_g_conf_5c68885cfa3253a2d945e38294d56734.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c68885cfa3253a2d945e38294d56734();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
