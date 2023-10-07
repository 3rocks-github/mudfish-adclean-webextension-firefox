
function mudfish_adclean_cc1fe1c21f41e4a888181c0788eba76d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="Banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cc1fe1c21f41e4a888181c0788eba76d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cc1fe1c21f41e4a888181c0788eba76d();
  });
}
