
function mudfish_adclean_5d471d6f429ca460b6581017e722bf2c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="//ad"][src*=".thisisgame.com/ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5d471d6f429ca460b6581017e722bf2c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5d471d6f429ca460b6581017e722bf2c();
  });
}
