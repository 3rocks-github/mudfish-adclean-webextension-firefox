
function mudfish_adclean_7c4e5c2cee7fa51854d3a4ab6c937f3a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7c4e5c2cee7fa51854d3a4ab6c937f3a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7c4e5c2cee7fa51854d3a4ab6c937f3a();
  });
}
