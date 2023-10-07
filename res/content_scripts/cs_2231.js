
function mudfish_adclean_79b2f2081ff7638075ac36057e8b21c5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mo-new-header .header .show-ads`).forEach(element => {
        element.style.maxHeight = "54px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_79b2f2081ff7638075ac36057e8b21c5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_79b2f2081ff7638075ac36057e8b21c5();
  });
}
