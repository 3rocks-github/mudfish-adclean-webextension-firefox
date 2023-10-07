
function mudfish_adclean_2f9d0b9640c54a97fa1de08bd51e6667() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.adsbygoogle`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2f9d0b9640c54a97fa1de08bd51e6667();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2f9d0b9640c54a97fa1de08bd51e6667();
  });
}
