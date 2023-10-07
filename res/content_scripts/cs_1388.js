
function mudfish_adclean_9ef95513242c6f5c696c0391bd10f557() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.productDetailInfo ~ div[style*=" "].emptyComponent`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9ef95513242c6f5c696c0391bd10f557();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9ef95513242c6f5c696c0391bd10f557();
  });
}
