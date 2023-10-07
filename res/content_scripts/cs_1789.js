
function mudfish_adclean_e46ec1278b6c89f66fc74dd07f30fbbc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="https://ads.gamemeca.com/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e46ec1278b6c89f66fc74dd07f30fbbc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e46ec1278b6c89f66fc74dd07f30fbbc();
  });
}
