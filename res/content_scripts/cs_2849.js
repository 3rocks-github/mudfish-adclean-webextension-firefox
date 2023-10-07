
function mudfish_adclean_64f65f0f6c8fcec93cccaa86937e1897() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.social-after-title`).forEach(element => {
        element.style.height = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_64f65f0f6c8fcec93cccaa86937e1897();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_64f65f0f6c8fcec93cccaa86937e1897();
  });
}
