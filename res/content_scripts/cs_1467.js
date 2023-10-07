
function mudfish_adclean_2ce014505a6298f3a865aa5651aca82a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href][target="_blank"] > img[src^="/data/banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2ce014505a6298f3a865aa5651aca82a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2ce014505a6298f3a865aa5651aca82a();
  });
}
