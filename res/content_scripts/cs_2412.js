
function mudfish_adclean_71d1ba451f15bf0e68c6b622ec7b7621() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table.bd_lst tr.notice:has(span.ad)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_71d1ba451f15bf0e68c6b622ec7b7621();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_71d1ba451f15bf0e68c6b622ec7b7621();
  });
}
