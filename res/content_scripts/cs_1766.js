
function mudfish_adclean_a1b2e90493d5d53f207e9426e3fe0b4e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#newsSidebar > div[class$="AD"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a1b2e90493d5d53f207e9426e3fe0b4e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a1b2e90493d5d53f207e9426e3fe0b4e();
  });
}
