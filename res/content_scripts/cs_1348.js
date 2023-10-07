
function mudfish_adclean_db7ab61968cacd3e1ed3470643572893() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header .dis-table > div[style^="padding-top:"].dis-table-cell`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_db7ab61968cacd3e1ed3470643572893();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_db7ab61968cacd3e1ed3470643572893();
  });
}
