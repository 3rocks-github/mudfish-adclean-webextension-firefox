
function mudfish_adclean_148152bed2cdf1d0e13ff004b15f3def() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header ~ #_hidden_layer_`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_148152bed2cdf1d0e13ff004b15f3def();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_148152bed2cdf1d0e13ff004b15f3def();
  });
}
