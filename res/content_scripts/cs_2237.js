
function mudfish_adclean_a39b42c140786817e820965d1b801a06() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.go_top.go_button`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a39b42c140786817e820965d1b801a06();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a39b42c140786817e820965d1b801a06();
  });
}
