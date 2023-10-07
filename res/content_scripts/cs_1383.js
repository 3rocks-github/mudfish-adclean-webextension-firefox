
function mudfish_adclean_936c79e533a70715a0bc37142d2d31a3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.td-ss-main-sidebar > .td-a-rec`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_936c79e533a70715a0bc37142d2d31a3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_936c79e533a70715a0bc37142d2d31a3();
  });
}
