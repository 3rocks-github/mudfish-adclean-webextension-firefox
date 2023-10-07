
function mudfish_adclean_763e20213f2b3149237ba6c2daa664ae() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="header-banner-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_763e20213f2b3149237ba6c2daa664ae();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_763e20213f2b3149237ba6c2daa664ae();
  });
}
