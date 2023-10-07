
function mudfish_adclean_0486e096459493c2f5ef2f83588e00ec() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.leftad2`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0486e096459493c2f5ef2f83588e00ec();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0486e096459493c2f5ef2f83588e00ec();
  });
}
