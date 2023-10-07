
function mudfish_adclean_a1901918e22cc7e4ed542871992664fd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`pre > div[style]:has(> iframe[src*=".ad4989.co.kr/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a1901918e22cc7e4ed542871992664fd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a1901918e22cc7e4ed542871992664fd();
  });
}
