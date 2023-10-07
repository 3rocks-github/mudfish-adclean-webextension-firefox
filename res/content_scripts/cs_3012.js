
function mudfish_adclean_bf50b24e6966eef95c6c6066531fa1f9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="_banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bf50b24e6966eef95c6c6066531fa1f9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bf50b24e6966eef95c6c6066531fa1f9();
  });
}
