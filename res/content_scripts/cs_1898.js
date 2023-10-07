
function mudfish_adclean_0fdcccf7c88b2bc15a379189cffd88fd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > div[align] > div[align] > div[style] > div[style][align="center"] > table[style*="margin-top:5px;"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0fdcccf7c88b2bc15a379189cffd88fd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0fdcccf7c88b2bc15a379189cffd88fd();
  });
}
