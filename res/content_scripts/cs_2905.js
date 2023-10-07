
function mudfish_adclean_857fe7f66353e9082db12274ed95d38a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="Layout-module_"] #newsstand`).forEach(element => {
        element.style.marginTop = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_857fe7f66353e9082db12274ed95d38a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_857fe7f66353e9082db12274ed95d38a();
  });
}
