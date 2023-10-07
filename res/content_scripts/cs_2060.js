
function mudfish_adclean_d66c223c267a63db440a947c123be8de() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sdpAdsBottom`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d66c223c267a63db440a947c123be8de();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d66c223c267a63db440a947c123be8de();
  });
}
