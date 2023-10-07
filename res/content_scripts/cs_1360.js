
function mudfish_adclean_2b0acc375c70342353173d97aa59bafd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="brave_popup_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2b0acc375c70342353173d97aa59bafd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2b0acc375c70342353173d97aa59bafd();
  });
}
