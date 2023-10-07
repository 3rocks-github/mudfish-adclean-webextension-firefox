
function mudfish_adclean_ddf8c4a4be06273c07423a592cdd74dd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="senkawa"] div[class] > div[id]:not([class]):contains(/^(|[​\n\t ]+)$/)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ddf8c4a4be06273c07423a592cdd74dd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ddf8c4a4be06273c07423a592cdd74dd();
  });
}
