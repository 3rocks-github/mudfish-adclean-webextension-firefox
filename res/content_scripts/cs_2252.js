
function mudfish_adclean_d893c4b521c4a60b0619f26e1954022c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.layout-main .main-menu`).forEach(element => {
        element.style.top = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d893c4b521c4a60b0619f26e1954022c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d893c4b521c4a60b0619f26e1954022c();
  });
}
