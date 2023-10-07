
function mudfish_adclean_c23428c42a39e1a5eb98b1b1eda214aa() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="contents"] > div[class^="main_area"]:has(a[href*="ADRollingBanner"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c23428c42a39e1a5eb98b1b1eda214aa();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c23428c42a39e1a5eb98b1b1eda214aa();
  });
}
