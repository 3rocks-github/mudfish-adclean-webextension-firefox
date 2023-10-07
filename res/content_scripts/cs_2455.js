
function mudfish_adclean_2fa454867c91335de560cae98466eedc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_best"] ul[class*="best_list"] li:has(a[href][target="_blank"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2fa454867c91335de560cae98466eedc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2fa454867c91335de560cae98466eedc();
  });
}
