
function mudfish_adclean_f06d8f3808d90c4a5fcf1aeec48a658e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.is-hover a[href^="http"][target="_blank"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f06d8f3808d90c4a5fcf1aeec48a658e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f06d8f3808d90c4a5fcf1aeec48a658e();
  });
}
