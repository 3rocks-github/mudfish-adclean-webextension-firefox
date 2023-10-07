
function mudfish_adclean_362da77f30df8a4fd8a9fa2555c31f77() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#ly_subb`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_362da77f30df8a4fd8a9fa2555c31f77();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_362da77f30df8a4fd8a9fa2555c31f77();
  });
}
