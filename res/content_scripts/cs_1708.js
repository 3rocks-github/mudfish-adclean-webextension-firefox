
function mudfish_adclean_7823e8b33cbafb9d23c7cd881e30366f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.articleView div[class^="botBox"]:not(.twinBox)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7823e8b33cbafb9d23c7cd881e30366f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7823e8b33cbafb9d23c7cd881e30366f();
  });
}
