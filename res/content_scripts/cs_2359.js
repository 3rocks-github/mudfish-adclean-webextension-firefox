
function mudfish_adclean_165bce2c112558ae73d56bddacae4f6c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wrap_list .standard`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_165bce2c112558ae73d56bddacae4f6c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_165bce2c112558ae73d56bddacae4f6c();
  });
}
