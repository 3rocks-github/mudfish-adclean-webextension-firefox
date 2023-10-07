
function mudfish_adclean_2413ca580f12384b69753be94bb4c674() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[target="_blank"][href][onclick][class*="Banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2413ca580f12384b69753be94bb4c674();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2413ca580f12384b69753be94bb4c674();
  });
}
