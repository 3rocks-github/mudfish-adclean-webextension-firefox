
function mudfish_adclean_5bf0a9c45bddff751b8d24fe671d97c9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ins[data-aiinad-inv] + .bk40`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5bf0a9c45bddff751b8d24fe671d97c9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5bf0a9c45bddff751b8d24fe671d97c9();
  });
}
