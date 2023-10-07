
function mudfish_adclean_f03872fa2bbaea26bac41e5c58ea58ec() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#hotPlace.myBox`).forEach(element => {
        element.style.marginLeft = "calc(50% - 65px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f03872fa2bbaea26bac41e5c58ea58ec();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f03872fa2bbaea26bac41e5c58ea58ec();
  });
}
