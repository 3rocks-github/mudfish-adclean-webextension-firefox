
function mudfish_adclean_6f5fd869609b68b56952ca9a9e51673a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style].content ~ div[class$="ad"][style*="min-height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6f5fd869609b68b56952ca9a9e51673a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6f5fd869609b68b56952ca9a9e51673a();
  });
}
