
function mudfish_adclean_efa45a6b8c22ed73d18f7a38f31363de() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.side .login-box ~ .img-wrap`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_efa45a6b8c22ed73d18f7a38f31363de();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_efa45a6b8c22ed73d18f7a38f31363de();
  });
}
