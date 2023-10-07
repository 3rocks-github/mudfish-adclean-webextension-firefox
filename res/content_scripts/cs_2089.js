
function mudfish_adclean_81bfe47ce22d5c60d4521c68cb95f610() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="https://ads.orbi.kr/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_81bfe47ce22d5c60d4521c68cb95f610();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_81bfe47ce22d5c60d4521c68cb95f610();
  });
}
