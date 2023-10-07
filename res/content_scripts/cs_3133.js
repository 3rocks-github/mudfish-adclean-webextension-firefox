
function mudfish_adclean_43a6f1796d421217c326f3fd0db37447() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wrap > div[id^="AD_MOBILE_VIEW"] ~ div[style^="width:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_43a6f1796d421217c326f3fd0db37447();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_43a6f1796d421217c326f3fd0db37447();
  });
}
