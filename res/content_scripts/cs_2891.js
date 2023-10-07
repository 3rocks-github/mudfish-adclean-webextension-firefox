
function mudfish_adclean_b606f625ebcf6171f620c4f13b5642ab() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section.main_left > div[style*="width:"][style*="text-align:"] ~ div[style^="margin-bottom:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b606f625ebcf6171f620c4f13b5642ab();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b606f625ebcf6171f620c4f13b5642ab();
  });
}
