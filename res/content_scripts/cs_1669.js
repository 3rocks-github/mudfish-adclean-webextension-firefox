
function mudfish_adclean_feb1e7a0b01269493f65cd815abe3208() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="/ad_link.php?"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_feb1e7a0b01269493f65cd815abe3208();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_feb1e7a0b01269493f65cd815abe3208();
  });
}
