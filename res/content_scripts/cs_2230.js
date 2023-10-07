
function mudfish_adclean_18fb27b6e3f119dadcb2268019f95c3a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.expanded > #user-container`).forEach(element => {
        element.style.paddingTop = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_18fb27b6e3f119dadcb2268019f95c3a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_18fb27b6e3f119dadcb2268019f95c3a();
  });
}
