
function mudfish_adclean_bb1fa1bfa0386b206b706a6ea1136f4e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="mobile-banner"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bb1fa1bfa0386b206b706a6ea1136f4e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bb1fa1bfa0386b206b706a6ea1136f4e();
  });
}
