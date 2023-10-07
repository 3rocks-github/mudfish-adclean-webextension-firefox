
function mudfish_adclean_46c3f93c6adcea8cb4b95a3e450a6f3c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.app-layout-content > #app-board > .app-board-section > .app-board-container > div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_46c3f93c6adcea8cb4b95a3e450a6f3c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_46c3f93c6adcea8cb4b95a3e450a6f3c();
  });
}
