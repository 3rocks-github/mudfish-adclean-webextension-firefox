
function mudfish_adclean_804d60f88c4a1fec96af14b90ee14e7f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="bann_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_804d60f88c4a1fec96af14b90ee14e7f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_804d60f88c4a1fec96af14b90ee14e7f();
  });
}
