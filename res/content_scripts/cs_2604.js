
function mudfish_adclean_c80e81c66e7d19b86bca4e53f1573125() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.banner_ad`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c80e81c66e7d19b86bca4e53f1573125();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c80e81c66e7d19b86bca4e53f1573125();
  });
}
