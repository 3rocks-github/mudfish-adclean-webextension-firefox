
function mudfish_adclean_fffd67906380cd35b76ce85ab4cce8a7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#primary`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fffd67906380cd35b76ce85ab4cce8a7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fffd67906380cd35b76ce85ab4cce8a7();
  });
}
