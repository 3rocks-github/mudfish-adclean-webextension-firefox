
function mudfish_adclean_f4024f26c6f0da8c0c1e3fd761659d2c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="better-ads-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f4024f26c6f0da8c0c1e3fd761659d2c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f4024f26c6f0da8c0c1e3fd761659d2c();
  });
}
