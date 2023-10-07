
function mudfish_adclean_8bde82e371ce818757a1d13b64b54bea() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="mobileTailAd"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8bde82e371ce818757a1d13b64b54bea();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8bde82e371ce818757a1d13b64b54bea();
  });
}
