
function mudfish_adclean_f4eff310ed14a709e2cd85ba70146ab6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.inwrap .right > div:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f4eff310ed14a709e2cd85ba70146ab6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f4eff310ed14a709e2cd85ba70146ab6();
  });
}
