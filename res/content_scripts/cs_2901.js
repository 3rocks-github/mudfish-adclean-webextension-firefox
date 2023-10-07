
function mudfish_adclean_db1981b1704f55012e8b343f6595c12e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#newsSidebar > div[class*="ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_db1981b1704f55012e8b343f6595c12e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_db1981b1704f55012e8b343f6595c12e();
  });
}
