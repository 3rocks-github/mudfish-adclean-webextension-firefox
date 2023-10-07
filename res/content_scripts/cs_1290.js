
function mudfish_adclean_d6533f168c92b4845aad556f88a1b25b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul[id*="_ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d6533f168c92b4845aad556f88a1b25b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d6533f168c92b4845aad556f88a1b25b();
  });
}
