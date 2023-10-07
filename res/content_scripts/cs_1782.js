
function mudfish_adclean_1819d0bd54dab9fdbb4d7ab4f0b9915f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table table > tbody table[width][cellspacing][cellpadding].black > tbody td[height="90"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1819d0bd54dab9fdbb4d7ab4f0b9915f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1819d0bd54dab9fdbb4d7ab4f0b9915f();
  });
}
