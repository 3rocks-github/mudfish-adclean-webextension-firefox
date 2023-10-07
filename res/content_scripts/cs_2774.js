
function mudfish_adclean_ef4b39d7110b3790e8d4e67ffa54c94d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article[class$="-banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ef4b39d7110b3790e8d4e67ffa54c94d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ef4b39d7110b3790e8d4e67ffa54c94d();
  });
}
