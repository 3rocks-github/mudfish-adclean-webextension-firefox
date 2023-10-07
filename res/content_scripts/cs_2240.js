
function mudfish_adclean_5b0d02246f512cc9df84ea8c1beb3329() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.board_view .related_area`).forEach(element => {
        element.style.height = "300px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5b0d02246f512cc9df84ea8c1beb3329();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5b0d02246f512cc9df84ea8c1beb3329();
  });
}
