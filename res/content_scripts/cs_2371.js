
function mudfish_adclean_e06822c2bd9694898c966d2e3062aa38() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div.sc-64vosk-0.jIkGEl`).forEach(element => {
        element.style.marginBottom = "10px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e06822c2bd9694898c966d2e3062aa38();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e06822c2bd9694898c966d2e3062aa38();
  });
}
