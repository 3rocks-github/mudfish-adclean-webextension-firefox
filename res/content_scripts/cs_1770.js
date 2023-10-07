
function mudfish_adclean_78cc25bb618943a5f14b4dc7138a4551() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#news_area ~ div[class*="_shopping"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_78cc25bb618943a5f14b4dc7138a4551();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_78cc25bb618943a5f14b4dc7138a4551();
  });
}
