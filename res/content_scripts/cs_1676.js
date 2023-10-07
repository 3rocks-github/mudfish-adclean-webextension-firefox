
function mudfish_adclean_23ccb5d0623fbcc88a03400b863f41c8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="panel_img_bottom_"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_23ccb5d0623fbcc88a03400b863f41c8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_23ccb5d0623fbcc88a03400b863f41c8();
  });
}
