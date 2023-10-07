
function mudfish_adclean_af22e78c0021f5109a034235b78c506b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[ng-if^="premiumLawyers"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_af22e78c0021f5109a034235b78c506b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_af22e78c0021f5109a034235b78c506b();
  });
}
