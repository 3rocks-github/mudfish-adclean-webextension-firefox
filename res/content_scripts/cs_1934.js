
function mudfish_adclean_2d0e8954843a9c418a6f096f2e134795() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="/Tracks/Banner-Log/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d0e8954843a9c418a6f096f2e134795();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d0e8954843a9c418a6f096f2e134795();
  });
}
