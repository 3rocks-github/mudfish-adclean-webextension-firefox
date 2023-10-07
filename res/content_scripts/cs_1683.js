
function mudfish_adclean_c3d5f1b76d35272a02f545c3c1862474() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.section div[class$="con_b"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c3d5f1b76d35272a02f545c3c1862474();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c3d5f1b76d35272a02f545c3c1862474();
  });
}
