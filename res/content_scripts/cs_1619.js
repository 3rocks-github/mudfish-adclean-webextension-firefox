
function mudfish_adclean_5583470f23b31a0757008106046c3ace() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="div-"][style*="min-height:"]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5583470f23b31a0757008106046c3ace();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5583470f23b31a0757008106046c3ace();
  });
}
