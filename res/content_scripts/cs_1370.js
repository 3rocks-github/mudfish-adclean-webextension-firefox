
function mudfish_adclean_f78342bec5586b8d9d93e133b02d293c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.container div[style^="height:"].mx-auto`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f78342bec5586b8d9d93e133b02d293c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f78342bec5586b8d9d93e133b02d293c();
  });
}
