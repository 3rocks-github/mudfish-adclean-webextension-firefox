
function mudfish_adclean_55921557d3ffbb6c37d1d3d39f414294() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.bot-content-area .mid-util-wrap .right-util-area`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_55921557d3ffbb6c37d1d3d39f414294();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_55921557d3ffbb6c37d1d3d39f414294();
  });
}
