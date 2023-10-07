
function mudfish_adclean_a7118dd2fa48611c79bf6dbc951398b4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_PlaceHolderContent_divMovieSelection_wrap"][class]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a7118dd2fa48611c79bf6dbc951398b4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a7118dd2fa48611c79bf6dbc951398b4();
  });
}
