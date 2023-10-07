
function mudfish_adclean_8c68d5d131380207cfc365afd7118709() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class] > div[disp-attr] ~ div[disp-attr]:has(a[href*="//brandsearch.ad.daum.net/"][onclick^="smartLog"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8c68d5d131380207cfc365afd7118709();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8c68d5d131380207cfc365afd7118709();
  });
}
