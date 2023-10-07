
function mudfish_adclean_5d14174a0712ff32f61555e59375ee64() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul.board-body > li[id^="sponser_ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5d14174a0712ff32f61555e59375ee64();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5d14174a0712ff32f61555e59375ee64();
  });
}
