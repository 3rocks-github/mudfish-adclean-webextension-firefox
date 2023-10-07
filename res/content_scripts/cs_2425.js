
function mudfish_adclean_c3d714c903774682a51ed06e42b428e4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="shortcodes-ultimate-"]:has(div[id^="block-"][class^="block-content-"][style])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c3d714c903774682a51ed06e42b428e4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c3d714c903774682a51ed06e42b428e4();
  });
}
