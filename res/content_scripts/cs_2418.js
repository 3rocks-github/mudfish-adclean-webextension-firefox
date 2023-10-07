
function mudfish_adclean_7bb1441112bc3ea6ce73bbf3fa7a00e5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[align] table[border] table[align]:has(td[align] img[alt="검색광고"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7bb1441112bc3ea6ce73bbf3fa7a00e5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7bb1441112bc3ea6ce73bbf3fa7a00e5();
  });
}
