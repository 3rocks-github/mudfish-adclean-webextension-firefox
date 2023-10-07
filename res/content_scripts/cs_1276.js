
function mudfish_adclean_55272c38bcebda55f7d4047c55dafc81() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_container > div[class^="content_"][class$="_list"] a[href^="/service/board"] ~ div[class^="list_center_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_55272c38bcebda55f7d4047c55dafc81();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_55272c38bcebda55f7d4047c55dafc81();
  });
}
