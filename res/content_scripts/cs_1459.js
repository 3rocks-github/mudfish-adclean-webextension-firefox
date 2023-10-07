
function mudfish_adclean_dc865153604cfbf2ed701e9b695a466d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#viewConts div[style][id^="articleBody"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_dc865153604cfbf2ed701e9b695a466d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_dc865153604cfbf2ed701e9b695a466d();
  });
}
