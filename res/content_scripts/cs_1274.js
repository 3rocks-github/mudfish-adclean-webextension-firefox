
function mudfish_adclean_43d61c56f10f911326ff717b1d5537d1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.aside > div[class^="side_"]:not([class*="account"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_43d61c56f10f911326ff717b1d5537d1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_43d61c56f10f911326ff717b1d5537d1();
  });
}
