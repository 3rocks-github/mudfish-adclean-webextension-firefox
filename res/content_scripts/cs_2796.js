
function mudfish_adclean_d9e2d489455dd45c6dc04991181efdcd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ent_wrapper.slide-vertical-effect .ent_navigation`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d9e2d489455dd45c6dc04991181efdcd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d9e2d489455dd45c6dc04991181efdcd();
  });
}
