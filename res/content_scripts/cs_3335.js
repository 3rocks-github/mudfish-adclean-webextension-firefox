
function mudfish_adclean_863d9260d2305bea0d56aa03b1f4ba60() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article > div[class^="sc-"]`).forEach(element => {
        element.style.gridTemplateColumns = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_863d9260d2305bea0d56aa03b1f4ba60();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_863d9260d2305bea0d56aa03b1f4ba60();
  });
}
