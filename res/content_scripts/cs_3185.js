
function mudfish_adclean_d7b1b7b224384428154d2fc71e9b1286() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.banner.container > .row > .col-6`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d7b1b7b224384428154d2fc71e9b1286();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d7b1b7b224384428154d2fc71e9b1286();
  });
}
