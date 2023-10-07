
function mudfish_adclean_9d2bf5aa6c0e3e71b38f92840a9b0e39() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.row > div[class][id=""] ~ #Contents ~ a[href*="Board=enterprise"] + div[class]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9d2bf5aa6c0e3e71b38f92840a9b0e39();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9d2bf5aa6c0e3e71b38f92840a9b0e39();
  });
}
