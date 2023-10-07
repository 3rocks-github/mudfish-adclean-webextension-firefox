
function mudfish_adclean_643bae9681155bfe1352649dba7a2c8d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[bgcolor][cellspacing] td[bgcolor] table[width][cellspacing]:not([bgcolor]):has(tr marquee#innovationGA)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_643bae9681155bfe1352649dba7a2c8d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_643bae9681155bfe1352649dba7a2c8d();
  });
}
