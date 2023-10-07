
function mudfish_adclean_e1d192af8c729c1add60064f176286e4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#googleAd`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e1d192af8c729c1add60064f176286e4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e1d192af8c729c1add60064f176286e4();
  });
}
