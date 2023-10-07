
function mudfish_adclean_0ec57ecfed6f7683d2dca1db9b386ec1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section.mo-top-nav ~ div[style]:not([id])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0ec57ecfed6f7683d2dca1db9b386ec1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0ec57ecfed6f7683d2dca1db9b386ec1();
  });
}
