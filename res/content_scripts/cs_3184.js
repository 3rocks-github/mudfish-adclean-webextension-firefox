
function mudfish_adclean_0c8c9868c7156dea01e69a2c3c2903b0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ad-form > .row > div[class^="col-md-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0c8c9868c7156dea01e69a2c3c2903b0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0c8c9868c7156dea01e69a2c3c2903b0();
  });
}
