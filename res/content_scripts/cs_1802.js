
function mudfish_adclean_a4d2170c93d4ff5760684a1bd1da000d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contents #recomN.recomend_main`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a4d2170c93d4ff5760684a1bd1da000d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a4d2170c93d4ff5760684a1bd1da000d();
  });
}
