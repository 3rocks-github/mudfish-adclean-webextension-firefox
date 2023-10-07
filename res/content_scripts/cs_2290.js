
function mudfish_adclean_36a6aafd39b39c45bd851553c186d3c1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header .artc_ad`).forEach(element => {
        element.style.height = "130px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_36a6aafd39b39c45bd851553c186d3c1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_36a6aafd39b39c45bd851553c186d3c1();
  });
}
