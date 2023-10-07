
function mudfish_adclean_3c65f8f960e3a85ccf26ad7dd8bd8aba() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#danawa_wrap > .ttop_banner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3c65f8f960e3a85ccf26ad7dd8bd8aba();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3c65f8f960e3a85ccf26ad7dd8bd8aba();
  });
}
