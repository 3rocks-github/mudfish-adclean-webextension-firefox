
function mudfish_adclean_cdc41749eb8ca3c3fdb347901015fe36() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.shoplink_wrap`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cdc41749eb8ca3c3fdb347901015fe36();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cdc41749eb8ca3c3fdb347901015fe36();
  });
}
