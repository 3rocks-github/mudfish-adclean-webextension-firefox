
function mudfish_adclean_82f98d246b30b5ded40bfac82b0c6193() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#sticky_variable_area`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_82f98d246b30b5ded40bfac82b0c6193();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_82f98d246b30b5ded40bfac82b0c6193();
  });
}
