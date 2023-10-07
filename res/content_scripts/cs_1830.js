
function mudfish_adclean_8b0a2cc8dc7a3a46312640c46be8e67d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside > hr[class]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8b0a2cc8dc7a3a46312640c46be8e67d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8b0a2cc8dc7a3a46312640c46be8e67d();
  });
}
