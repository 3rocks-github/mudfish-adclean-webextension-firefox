
function mudfish_adclean_2cefa6615a3c74beb7b92d09ab263b7e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_container > div[id$="_content"][class^="content_"] .contents_main > div[class^="main_center_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2cefa6615a3c74beb7b92d09ab263b7e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2cefa6615a3c74beb7b92d09ab263b7e();
  });
}
