
function mudfish_adclean_26c3c00122a060045d6c222f78feb95c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="_ad_wrap"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_26c3c00122a060045d6c222f78feb95c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_26c3c00122a060045d6c222f78feb95c();
  });
}
