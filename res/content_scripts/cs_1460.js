
function mudfish_adclean_00cf7d034e0286be0deff9dad90d308b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside.user-aside div[data-direction]#side-scroll-in > .float-center`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_00cf7d034e0286be0deff9dad90d308b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_00cf7d034e0286be0deff9dad90d308b();
  });
}
