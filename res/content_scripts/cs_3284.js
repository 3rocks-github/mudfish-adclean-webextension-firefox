
function mudfish_adclean_6a2a3c3d51ad666fed3d83b20e0b4633() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.atc_ex`).forEach(element => {
        element.style.height = "auto !important";
element.style.overflow = "visible !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6a2a3c3d51ad666fed3d83b20e0b4633();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6a2a3c3d51ad666fed3d83b20e0b4633();
  });
}
