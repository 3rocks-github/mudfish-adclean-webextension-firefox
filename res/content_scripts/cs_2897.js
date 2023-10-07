
function mudfish_adclean_a7533de5f11d2e1fda35ea36a0e0d5ed() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content-container > main > div[class^="css-"][class*=" "] ~ div[class^="css-"][class*=" "][style^="margin-bottom:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a7533de5f11d2e1fda35ea36a0e0d5ed();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a7533de5f11d2e1fda35ea36a0e0d5ed();
  });
}
