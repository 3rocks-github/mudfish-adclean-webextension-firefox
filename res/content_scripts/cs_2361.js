
function mudfish_adclean_6bfc758eaa2b1c7b673bdfbbdf4b5e07() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.banner-open .contents`).forEach(element => {
        element.style.paddingTop = "68px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6bfc758eaa2b1c7b673bdfbbdf4b5e07();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6bfc758eaa2b1c7b673bdfbbdf4b5e07();
  });
}
