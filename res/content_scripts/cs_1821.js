
function mudfish_adclean_1512ad5d7e628dee01caadfb04c31bd2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wrap > div[style$="height:100px;"]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1512ad5d7e628dee01caadfb04c31bd2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1512ad5d7e628dee01caadfb04c31bd2();
  });
}
