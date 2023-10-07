
function mudfish_adclean_e35e5a96c310a47d58a2dc729a3445ed() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style~="background-image:"][style*=".cuonet.com/data/apms/background/"].item`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e35e5a96c310a47d58a2dc729a3445ed();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e35e5a96c310a47d58a2dc729a3445ed();
  });
}
