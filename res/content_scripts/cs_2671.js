
function mudfish_adclean_8e7e6cdf66161965f246b4c2c10ced70() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class*="_ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8e7e6cdf66161965f246b4c2c10ced70();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8e7e6cdf66161965f246b4c2c10ced70();
  });
}
