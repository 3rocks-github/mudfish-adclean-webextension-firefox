
function mudfish_adclean_0b661bb89a96dbcad7825332cf3c8d62() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.aside_g.aside_shopping`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0b661bb89a96dbcad7825332cf3c8d62();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0b661bb89a96dbcad7825332cf3c8d62();
  });
}
