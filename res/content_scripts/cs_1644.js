
function mudfish_adclean_3eef8bfbcf4c122eba2d87969ac6cbaa() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#artContent > div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3eef8bfbcf4c122eba2d87969ac6cbaa();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3eef8bfbcf4c122eba2d87969ac6cbaa();
  });
}
