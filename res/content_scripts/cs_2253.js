
function mudfish_adclean_1f7d6d94f6d871b1cabbeede3cc614ed() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="-banner-"]`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1f7d6d94f6d871b1cabbeede3cc614ed();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1f7d6d94f6d871b1cabbeede3cc614ed();
  });
}
