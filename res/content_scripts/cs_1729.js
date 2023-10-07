
function mudfish_adclean_97b13f7c7055ac53e4ab791304eea394() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#main-menu div[style][align]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_97b13f7c7055ac53e4ab791304eea394();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_97b13f7c7055ac53e4ab791304eea394();
  });
}
