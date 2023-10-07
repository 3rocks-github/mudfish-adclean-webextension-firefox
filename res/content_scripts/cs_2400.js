
function mudfish_adclean_2e25ecdfca19c5429ebb5a13b2ad30b1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[width][border] td:not([width]):has(div[align="CENTER"] > .adsbygoogle, td[bgcolor] a[href*="//link.coupang.com/"] > img)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2e25ecdfca19c5429ebb5a13b2ad30b1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2e25ecdfca19c5429ebb5a13b2ad30b1();
  });
}
