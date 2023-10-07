
function mudfish_adclean_95fedb3341d244c1e7f33a2c7b9cdd78() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.text-center > a[onclick^="App.trackOutboundLink"]:has(> img[src^="https://upload.acmicpc.net"][class^="visible-"][class$="-block"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_95fedb3341d244c1e7f33a2c7b9cdd78();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_95fedb3341d244c1e7f33a2c7b9cdd78();
  });
}
