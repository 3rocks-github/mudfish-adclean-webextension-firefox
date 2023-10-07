
function mudfish_adclean_22c46e4a128dc4a70518b073b8fc2f16() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[target="_blank"][data-href][data-banner-statics]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_22c46e4a128dc4a70518b073b8fc2f16();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_22c46e4a128dc4a70518b073b8fc2f16();
  });
}
