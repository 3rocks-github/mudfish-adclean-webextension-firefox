
function mudfish_adclean_f86fdf509796a6ad45a5b5e89c7438e5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="inner"].column > div`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f86fdf509796a6ad45a5b5e89c7438e5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f86fdf509796a6ad45a5b5e89c7438e5();
  });
}
