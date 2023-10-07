
function mudfish_adclean_18bb795ca5e597832a2743802d6911fd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.card:has( > .banner > a[href*="//ad.everytime.kr/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_18bb795ca5e597832a2743802d6911fd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_18bb795ca5e597832a2743802d6911fd();
  });
}
