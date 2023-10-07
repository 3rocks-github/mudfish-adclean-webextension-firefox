
function mudfish_adclean_505198a02af78f911340067a445a18b3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.section-lefttop-center:has(> .mule-today)`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_505198a02af78f911340067a445a18b3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_505198a02af78f911340067a445a18b3();
  });
}
