
function mudfish_adclean_9bac31926a4b4d1041f6cf4341ffc862() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.naver_power_shopping`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9bac31926a4b4d1041f6cf4341ffc862();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9bac31926a4b4d1041f6cf4341ffc862();
  });
}
