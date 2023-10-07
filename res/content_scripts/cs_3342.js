
function mudfish_adclean_3885978298aefa3ca198999a0cb60320() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`figure[id^="image-"]:has(> img[src^="/files/media/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3885978298aefa3ca198999a0cb60320();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3885978298aefa3ca198999a0cb60320();
  });
}
