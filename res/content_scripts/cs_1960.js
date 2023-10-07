
function mudfish_adclean_a0c46ee3654f7651c2e861d1852b2fce() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="/inc_banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a0c46ee3654f7651c2e861d1852b2fce();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a0c46ee3654f7651c2e861d1852b2fce();
  });
}
