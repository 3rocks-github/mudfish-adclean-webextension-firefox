
function mudfish_adclean_ea5e5104d2f349165b759c5f34c82d20() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main > section[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ea5e5104d2f349165b759c5f34c82d20();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ea5e5104d2f349165b759c5f34c82d20();
  });
}
