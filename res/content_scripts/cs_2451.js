
function mudfish_adclean_c7dda0af68668ea9b27ec72a97912acc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class] > div[disp-attr] ~ div[disp-attr]:has(a[href*="//brandsearch.ad.daum.net/"][onclick^="smartLog"]) + .line`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c7dda0af68668ea9b27ec72a97912acc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c7dda0af68668ea9b27ec72a97912acc();
  });
}
