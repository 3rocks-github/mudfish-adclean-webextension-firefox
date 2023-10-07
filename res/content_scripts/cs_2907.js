
function mudfish_adclean_f6f7e7ba98470df689e86c2150f45767() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="article-adCover-div-"]`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f6f7e7ba98470df689e86c2150f45767();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f6f7e7ba98470df689e86c2150f45767();
  });
}
