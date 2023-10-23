
function mudfish_adclean_0bcee73fc3ef5dd07105753971b91cdf() {
  try {
    Sizzle(`.na-col > div[id^="carousel_"].carousel-fade .carousel-item:has(a[href]:not([href*="//coolenjoy.net/"])[target="_self"])`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0bcee73fc3ef5dd07105753971b91cdf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0bcee73fc3ef5dd07105753971b91cdf, function (items) {
  if (mudfish_adclean_g_conf_0bcee73fc3ef5dd07105753971b91cdf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0bcee73fc3ef5dd07105753971b91cdf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0bcee73fc3ef5dd07105753971b91cdf();
    });
  }
});
