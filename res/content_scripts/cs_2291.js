
function mudfish_adclean_eceb94407a50b13ca62e512274f59304() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header`).forEach(element => {
        element.style.height = "100px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_eceb94407a50b13ca62e512274f59304();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_eceb94407a50b13ca62e512274f59304();
  });
}
