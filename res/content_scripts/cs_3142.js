
function mudfish_adclean_962a33712e4f52320382a19fc566850f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#wingBanner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_962a33712e4f52320382a19fc566850f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_962a33712e4f52320382a19fc566850f();
  });
}
