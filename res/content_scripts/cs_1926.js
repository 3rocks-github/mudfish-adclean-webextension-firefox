
function mudfish_adclean_1bc751a78da1ae2ee2dd512403ef9ac5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="dablewidget_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1bc751a78da1ae2ee2dd512403ef9ac5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1bc751a78da1ae2ee2dd512403ef9ac5();
  });
}
