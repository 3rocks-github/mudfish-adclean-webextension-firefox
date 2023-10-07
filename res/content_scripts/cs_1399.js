
function mudfish_adclean_99f498599e088c15ef3b05b2fff1e4c8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.widget-box > div[style*="min-height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_99f498599e088c15ef3b05b2fff1e4c8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_99f498599e088c15ef3b05b2fff1e4c8();
  });
}
