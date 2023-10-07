
function mudfish_adclean_e9cb3d7ab9d0993908091e2dd157855f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.errorlay .new-login-warp`).forEach(element => {
        element.style.paddingTop = "20px !important";
element.style.marginLeft = "calc(50% - 232.5px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e9cb3d7ab9d0993908091e2dd157855f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e9cb3d7ab9d0993908091e2dd157855f();
  });
}
