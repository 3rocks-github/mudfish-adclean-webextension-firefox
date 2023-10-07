
function mudfish_adclean_ac14c21411429adad7e75549e30aeadd() {
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
  mudfish_adclean_ac14c21411429adad7e75549e30aeadd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ac14c21411429adad7e75549e30aeadd();
  });
}
