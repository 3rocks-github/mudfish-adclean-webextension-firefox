
function mudfish_adclean_6374d59a8b4c2d6aec1f83c53d0646d6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id][style~="height:100px;"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6374d59a8b4c2d6aec1f83c53d0646d6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6374d59a8b4c2d6aec1f83c53d0646d6();
  });
}
