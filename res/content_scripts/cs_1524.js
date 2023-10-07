
function mudfish_adclean_cb2b53194cf12e1f24606ca7b2c08867() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#Article > div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cb2b53194cf12e1f24606ca7b2c08867();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cb2b53194cf12e1f24606ca7b2c08867();
  });
}
