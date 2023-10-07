
function mudfish_adclean_61308696273a0e724090f4bee93833da() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="/banner/google_ad.html"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_61308696273a0e724090f4bee93833da();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_61308696273a0e724090f4bee93833da();
  });
}
