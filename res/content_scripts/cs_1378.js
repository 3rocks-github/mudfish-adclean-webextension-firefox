
function mudfish_adclean_f9378b9f4cf2eec60a07df84061ec9da() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="_adban"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f9378b9f4cf2eec60a07df84061ec9da();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f9378b9f4cf2eec60a07df84061ec9da();
  });
}
