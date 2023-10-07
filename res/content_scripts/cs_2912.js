
function mudfish_adclean_e00ba799885cc1b23376d9ac06a0c511() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mdnw-main-recommend-realCuration-swipeContainer > div[id*="-ad-"]`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e00ba799885cc1b23376d9ac06a0c511();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e00ba799885cc1b23376d9ac06a0c511();
  });
}
