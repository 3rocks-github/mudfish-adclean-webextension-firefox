
function mudfish_adclean_0aa2c22cc202ea2adda51451e55b363e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#banner, .modal-backdrop`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0aa2c22cc202ea2adda51451e55b363e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0aa2c22cc202ea2adda51451e55b363e();
  });
}
