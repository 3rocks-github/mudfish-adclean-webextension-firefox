
function mudfish_adclean_f342517313d4f3af1a733324fd4c77f2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main > .main_visual`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f342517313d4f3af1a733324fd4c77f2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f342517313d4f3af1a733324fd4c77f2();
  });
}
