
function mudfish_adclean_863d9260d2305bea0d56aa03b1f4ba60() {
  try {
    Sizzle(`article > div[class^="sc-"]`).forEach(element => {
      element.style.gridTemplateColumns = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_863d9260d2305bea0d56aa03b1f4ba60 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_863d9260d2305bea0d56aa03b1f4ba60, function (items) {
  if (mudfish_adclean_g_conf_863d9260d2305bea0d56aa03b1f4ba60.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_863d9260d2305bea0d56aa03b1f4ba60();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_863d9260d2305bea0d56aa03b1f4ba60();
    });
  }
});
