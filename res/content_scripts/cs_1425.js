
function mudfish_adclean_cee5806227b6d87a4a1f7a4426812985() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.tagdiv-type .best_news_wrap_mo`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cee5806227b6d87a4a1f7a4426812985();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cee5806227b6d87a4a1f7a4426812985();
  });
}
