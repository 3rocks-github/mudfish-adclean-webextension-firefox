
function mudfish_adclean_9262fc0a8b42add4a0d21a4284c6e7a9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ins.dcmads`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9262fc0a8b42add4a0d21a4284c6e7a9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9262fc0a8b42add4a0d21a4284c6e7a9();
  });
}
