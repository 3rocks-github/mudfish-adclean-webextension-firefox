
function mudfish_adclean_3d243c0fdd2eac34d4d1190c0f0acf74() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#advertiseInPlayer`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3d243c0fdd2eac34d4d1190c0f0acf74();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3d243c0fdd2eac34d4d1190c0f0acf74();
  });
}
