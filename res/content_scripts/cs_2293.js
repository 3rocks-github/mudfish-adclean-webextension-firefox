
function mudfish_adclean_5ef5058945663fb9f83f8729f3c72c66() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.cs_news_area .cs_area`).forEach(element => {
        element.style.width = "calc(100% - 2px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5ef5058945663fb9f83f8729f3c72c66();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5ef5058945663fb9f83f8729f3c72c66();
  });
}
