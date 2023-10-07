
function mudfish_adclean_775e7455cd24b888b80ecc5ff04da409() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table .list-notice-alarm-sponsor-tr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_775e7455cd24b888b80ecc5ff04da409();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_775e7455cd24b888b80ecc5ff04da409();
  });
}
