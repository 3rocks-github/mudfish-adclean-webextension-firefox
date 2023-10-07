
function mudfish_adclean_aafdd9a067c3130ce83ac5cf3880dc33() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table.bd_list tr:has(a[href^="/board/ad/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aafdd9a067c3130ce83ac5cf3880dc33();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aafdd9a067c3130ce83ac5cf3880dc33();
  });
}
