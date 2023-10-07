
function mudfish_adclean_9b25b9b8272d049ac289f51217f95f4b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.user-content > .user-aside`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9b25b9b8272d049ac289f51217f95f4b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9b25b9b8272d049ac289f51217f95f4b();
  });
}
