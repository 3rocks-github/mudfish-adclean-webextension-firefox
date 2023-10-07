
function mudfish_adclean_35b50822d91ec20fdfdeedb15bf53d91() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.comment_best_wrap ~ div[id][style^="min-height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_35b50822d91ec20fdfdeedb15bf53d91();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_35b50822d91ec20fdfdeedb15bf53d91();
  });
}
