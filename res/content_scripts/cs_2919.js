
function mudfish_adclean_7bbf5f09034f26c619fad462e2f433cf() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ent_wrapper.slide-vertical-effect .ent_news:not(:has(.ent_prefix:contains(ZZAPFLIX)))`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7bbf5f09034f26c619fad462e2f433cf();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7bbf5f09034f26c619fad462e2f433cf();
  });
}
