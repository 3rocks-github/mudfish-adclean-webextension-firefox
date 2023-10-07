
function mudfish_adclean_6f39d649d19ece5bd4880b7bdfedac8c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[id^="index_"] tr:has(ins.adsbygoogle)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6f39d649d19ece5bd4880b7bdfedac8c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6f39d649d19ece5bd4880b7bdfedac8c();
  });
}
