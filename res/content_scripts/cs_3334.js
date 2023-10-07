
function mudfish_adclean_060f8391f2ee06f2ad4872c4570f1e30() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article > div[class^="sc-"] > aside[class*=" "]`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_060f8391f2ee06f2ad4872c4570f1e30();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_060f8391f2ee06f2ad4872c4570f1e30();
  });
}
