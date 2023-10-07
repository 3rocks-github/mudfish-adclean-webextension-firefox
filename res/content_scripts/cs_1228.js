
function mudfish_adclean_85d86946b7a256637b6b3a800118c13b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.search_content > section[data-log-actionid-area="recommend"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_85d86946b7a256637b6b3a800118c13b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_85d86946b7a256637b6b3a800118c13b();
  });
}
