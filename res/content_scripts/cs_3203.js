
function mudfish_adclean_6399b64abff1c6503d869ccd382bf003() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body`).forEach(element => {
        element.style.overflow = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6399b64abff1c6503d869ccd382bf003();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6399b64abff1c6503d869ccd382bf003();
  });
}
