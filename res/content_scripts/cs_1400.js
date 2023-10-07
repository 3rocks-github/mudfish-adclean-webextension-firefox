
function mudfish_adclean_242334262bf28f97813e282a75e6faef() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="_"][style*=" "] ~ div[id][class]:not([id*="_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_242334262bf28f97813e282a75e6faef();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_242334262bf28f97813e282a75e6faef();
  });
}
