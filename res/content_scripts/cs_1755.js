
function mudfish_adclean_5b191b4cb5df7190fbefc5e3f89f9e74() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#body_wrap > #body_main > div[style]:nth-child(2)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5b191b4cb5df7190fbefc5e3f89f9e74();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5b191b4cb5df7190fbefc5e3f89f9e74();
  });
}
