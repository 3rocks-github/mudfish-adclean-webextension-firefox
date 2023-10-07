
function mudfish_adclean_5aede9e9f17e6594f8ca7a9f0825d7fe() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > div[style]:not([class]):not([id])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5aede9e9f17e6594f8ca7a9f0825d7fe();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5aede9e9f17e6594f8ca7a9f0825d7fe();
  });
}
