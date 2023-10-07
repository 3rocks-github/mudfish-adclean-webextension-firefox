
function mudfish_adclean_fdedf7956458b55afd30b493e07af4b4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main.app-main > .app-layout-container > .app-layout-content > #app-board > div > div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fdedf7956458b55afd30b493e07af4b4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fdedf7956458b55afd30b493e07af4b4();
  });
}
