
function mudfish_adclean_9faf5d6f28d7e202a75ba56f17a9cc20() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.gdl-page-item`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9faf5d6f28d7e202a75ba56f17a9cc20();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9faf5d6f28d7e202a75ba56f17a9cc20();
  });
}
