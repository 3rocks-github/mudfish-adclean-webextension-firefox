
function mudfish_adclean_160cbff17344b77af7795647895e2d34() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#article-view div[style].float-center .clearfix > div[class^="box-margin"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_160cbff17344b77af7795647895e2d34();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_160cbff17344b77af7795647895e2d34();
  });
}
