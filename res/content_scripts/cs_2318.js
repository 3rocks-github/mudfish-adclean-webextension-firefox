
function mudfish_adclean_2c8ea9b6ca3dd37579552d5044a6509b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#loginFormWrite`).forEach(element => {
        element.style.marginLeft = "25% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2c8ea9b6ca3dd37579552d5044a6509b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2c8ea9b6ca3dd37579552d5044a6509b();
  });
}
