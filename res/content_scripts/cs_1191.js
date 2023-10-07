
function mudfish_adclean_a14b19cdfe0c75b0f1bf8700e6656535() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class*="_banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a14b19cdfe0c75b0f1bf8700e6656535();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a14b19cdfe0c75b0f1bf8700e6656535();
  });
}
