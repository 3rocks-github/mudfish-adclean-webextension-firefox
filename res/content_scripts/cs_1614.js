
function mudfish_adclean_26841df4a25854a715eda3f7b3bb5ef2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style] > a[href][target="_blank"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_26841df4a25854a715eda3f7b3bb5ef2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_26841df4a25854a715eda3f7b3bb5ef2();
  });
}
