
function mudfish_adclean_153d271634604304134dd12bfba529e8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mwcphideBtn`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_153d271634604304134dd12bfba529e8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_153d271634604304134dd12bfba529e8();
  });
}
