
function mudfish_adclean_0d14acd3f99624acbd16345d8c728db4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.box__login .box__login-member`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0d14acd3f99624acbd16345d8c728db4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0d14acd3f99624acbd16345d8c728db4();
  });
}
