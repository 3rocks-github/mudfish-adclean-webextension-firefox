
function mudfish_adclean_4078660c8f414e1298e1011d43a61a04() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[id^="aswift_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4078660c8f414e1298e1011d43a61a04();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4078660c8f414e1298e1011d43a61a04();
  });
}
