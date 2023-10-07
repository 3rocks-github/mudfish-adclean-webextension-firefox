
function mudfish_adclean_ecb73e8ff3f552678831663c47ec03a5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.hideBtn`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ecb73e8ff3f552678831663c47ec03a5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ecb73e8ff3f552678831663c47ec03a5();
  });
}
