
function mudfish_adclean_9616e63db31b92627cc821781c2d2a2a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//io1.innorame.com/"] + .bk40`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9616e63db31b92627cc821781c2d2a2a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9616e63db31b92627cc821781c2d2a2a();
  });
}
