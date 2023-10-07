
function mudfish_adclean_fdc7d3fc71874dff4fc499ee6351b198() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#news-contents div[style*="margin:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fdc7d3fc71874dff4fc499ee6351b198();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fdc7d3fc71874dff4fc499ee6351b198();
  });
}
