
function mudfish_adclean_5ac45a6298b11de79598276dc6ad6522() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//loader.fmkorea.com/"][src*="_loader/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5ac45a6298b11de79598276dc6ad6522();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5ac45a6298b11de79598276dc6ad6522();
  });
}
