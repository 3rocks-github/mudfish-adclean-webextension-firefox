
function mudfish_adclean_920cd2b2e4614c3ec9cf7ae73c43d698() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#hidden1`).forEach(element => {
        element.style.display = "block !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_920cd2b2e4614c3ec9cf7ae73c43d698();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_920cd2b2e4614c3ec9cf7ae73c43d698();
  });
}
