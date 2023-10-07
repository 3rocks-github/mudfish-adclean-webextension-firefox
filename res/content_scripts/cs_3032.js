
function mudfish_adclean_f22230db54577778aa11c39d88ac7a8a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#yHeader .yesSearch .key_latest .lastest_word`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f22230db54577778aa11c39d88ac7a8a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f22230db54577778aa11c39d88ac7a8a();
  });
}
