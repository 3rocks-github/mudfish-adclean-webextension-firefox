
function mudfish_adclean_d8e0a9aec0e1c8da00409cdf8a72539d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.bnt > div[class^="bancol"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d8e0a9aec0e1c8da00409cdf8a72539d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d8e0a9aec0e1c8da00409cdf8a72539d();
  });
}
