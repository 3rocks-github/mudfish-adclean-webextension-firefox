
function mudfish_adclean_60164eb32bff463e94308b2bbc1b6eaf() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="Banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_60164eb32bff463e94308b2bbc1b6eaf();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_60164eb32bff463e94308b2bbc1b6eaf();
  });
}
