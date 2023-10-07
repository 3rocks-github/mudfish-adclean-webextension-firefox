
function mudfish_adclean_54ca05d70b4789ff06c83c1e242b7bbe() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wrap * + div[style*=";margin"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_54ca05d70b4789ff06c83c1e242b7bbe();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_54ca05d70b4789ff06c83c1e242b7bbe();
  });
}
