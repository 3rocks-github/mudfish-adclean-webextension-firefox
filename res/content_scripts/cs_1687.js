
function mudfish_adclean_a70f52bb165d0d4b1f981de4928a5664() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[id^="ad-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a70f52bb165d0d4b1f981de4928a5664();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a70f52bb165d0d4b1f981de4928a5664();
  });
}
