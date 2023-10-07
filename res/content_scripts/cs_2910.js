
function mudfish_adclean_0bcee73fc3ef5dd07105753971b91cdf() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.na-col > div[id^="carousel_"].carousel-fade .carousel-item:has(a[href]:not([href*="//coolenjoy.net/"])[target="_self"])`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0bcee73fc3ef5dd07105753971b91cdf();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0bcee73fc3ef5dd07105753971b91cdf();
  });
}
