
function mudfish_adclean_29a567de2e99282b18e91e62632255fd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href*="../api/redirectAd.php?"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_29a567de2e99282b18e91e62632255fd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_29a567de2e99282b18e91e62632255fd();
  });
}
