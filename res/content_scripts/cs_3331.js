
function mudfish_adclean_6bc2613e7f51cd9d86855148f34040fa() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.xe_content span ~ div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6bc2613e7f51cd9d86855148f34040fa();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6bc2613e7f51cd9d86855148f34040fa();
  });
}
