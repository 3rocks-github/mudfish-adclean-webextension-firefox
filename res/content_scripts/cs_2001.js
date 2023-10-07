
function mudfish_adclean_285757edf01bb216c5cfe3f2a2883953() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.top-owl.owl-carousel`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_285757edf01bb216c5cfe3f2a2883953();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_285757edf01bb216c5cfe3f2a2883953();
  });
}
