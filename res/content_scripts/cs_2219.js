
function mudfish_adclean_bddd00dfac1a3f00b021b30e62ac38ef() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.respons-edit > div[style].float-left`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bddd00dfac1a3f00b021b30e62ac38ef();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bddd00dfac1a3f00b021b30e62ac38ef();
  });
}
