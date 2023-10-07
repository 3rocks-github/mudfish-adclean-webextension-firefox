
function mudfish_adclean_13a28e9722df4bf1d9c3942cbe4d832a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#top-banner-ad`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_13a28e9722df4bf1d9c3942cbe4d832a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_13a28e9722df4bf1d9c3942cbe4d832a();
  });
}
