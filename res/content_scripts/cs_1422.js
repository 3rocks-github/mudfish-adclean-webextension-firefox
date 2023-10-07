
function mudfish_adclean_2046e6a2755ada5aa9088c135d370e3b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#wrap_cnts > div[style^="margin:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2046e6a2755ada5aa9088c135d370e3b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2046e6a2755ada5aa9088c135d370e3b();
  });
}
