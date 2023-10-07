
function mudfish_adclean_1dfc2995965b8b815f92f5cfb1891872() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main__grid.main__grid--line .main__grid__right`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1dfc2995965b8b815f92f5cfb1891872();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1dfc2995965b8b815f92f5cfb1891872();
  });
}
