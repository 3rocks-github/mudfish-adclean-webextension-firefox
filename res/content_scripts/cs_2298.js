
function mudfish_adclean_674ba994fcd889cdace386483f4f8544() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.box-skin .mobile-popular`).forEach(element => {
        element.style.borderTop = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_674ba994fcd889cdace386483f4f8544();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_674ba994fcd889cdace386483f4f8544();
  });
}
