
function mudfish_adclean_bf9db985f1ee9f96730927d5d7a5c7b8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.aside_bundle > div[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bf9db985f1ee9f96730927d5d7a5c7b8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bf9db985f1ee9f96730927d5d7a5c7b8();
  });
}
