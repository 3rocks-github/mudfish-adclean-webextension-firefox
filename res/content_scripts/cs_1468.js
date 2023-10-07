
function mudfish_adclean_e153e9c49e8e8e03aeda31f79f585611() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.sc._pwl_video_container`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e153e9c49e8e8e03aeda31f79f585611();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e153e9c49e8e8e03aeda31f79f585611();
  });
}
