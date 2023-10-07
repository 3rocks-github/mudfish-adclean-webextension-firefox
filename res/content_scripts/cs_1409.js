
function mudfish_adclean_530f9ad3af7cf823ca1ef69a8498d775() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.row > div[class][id=""] ~ #Contents ~ a[href*="?Board=enterprise"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_530f9ad3af7cf823ca1ef69a8498d775();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_530f9ad3af7cf823ca1ef69a8498d775();
  });
}
