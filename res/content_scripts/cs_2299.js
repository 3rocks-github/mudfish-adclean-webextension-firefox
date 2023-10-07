
function mudfish_adclean_2dfb7b673f8b003f0587ada87d4edee7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.thisTimeNews > ul`).forEach(element => {
        element.style.borderRight = "none !important";
element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2dfb7b673f8b003f0587ada87d4edee7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2dfb7b673f8b003f0587ada87d4edee7();
  });
}
