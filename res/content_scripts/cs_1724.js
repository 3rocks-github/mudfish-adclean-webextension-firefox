
function mudfish_adclean_0c42b4a839964d531e8c3de181edce76() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.section_market_line`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0c42b4a839964d531e8c3de181edce76();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0c42b4a839964d531e8c3de181edce76();
  });
}
