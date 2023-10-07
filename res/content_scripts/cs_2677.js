
function mudfish_adclean_64b6aeb11acea4490e8862ad6910613d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sidebar_container .relative:has([class*="_ad_"]) ~ div[class^="spacer"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_64b6aeb11acea4490e8862ad6910613d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_64b6aeb11acea4490e8862ad6910613d();
  });
}
