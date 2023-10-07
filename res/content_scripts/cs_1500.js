
function mudfish_adclean_5651ff39226909f581af7d711cb28151() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ads + div:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5651ff39226909f581af7d711cb28151();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5651ff39226909f581af7d711cb28151();
  });
}
