
function mudfish_adclean_84c19de27a6c1ea7602da9638daef804() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_1`).forEach(element => {
        element.style.width = "239px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_84c19de27a6c1ea7602da9638daef804();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_84c19de27a6c1ea7602da9638daef804();
  });
}
