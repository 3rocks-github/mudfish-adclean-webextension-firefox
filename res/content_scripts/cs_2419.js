
function mudfish_adclean_9a16d52e7126351243e47d31bd5e492f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[width] table[width] td[width][height]:has(a[target="_blank"] img[alt="배너광고안내"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9a16d52e7126351243e47d31bd5e492f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9a16d52e7126351243e47d31bd5e492f();
  });
}
