
function mudfish_adclean_5cf102a75d139d595300934707b4231d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside.user-aside > article.box-skin + .box-margins:not(.box-solid-x) ~ div[class]:has(~ article)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5cf102a75d139d595300934707b4231d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5cf102a75d139d595300934707b4231d();
  });
}
