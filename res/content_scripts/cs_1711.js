
function mudfish_adclean_533707a3c7c419fb03acffc7799f65e1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="w_header_"]:nth-child(1)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_533707a3c7c419fb03acffc7799f65e1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_533707a3c7c419fb03acffc7799f65e1();
  });
}
