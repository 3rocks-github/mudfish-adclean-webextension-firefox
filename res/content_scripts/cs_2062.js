
function mudfish_adclean_9b2607c0db4eeb524b6fad0a98ffb71a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.topbanner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9b2607c0db4eeb524b6fad0a98ffb71a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9b2607c0db4eeb524b6fad0a98ffb71a();
  });
}
